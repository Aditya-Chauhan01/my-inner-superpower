import { useState } from "react";
import { quizQuestions, calculatePersonalityResult } from "@/data/quizData";
import QuizLanding from "./QuizLanding";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function PersonalityQuiz() {
  const [quizState, setQuizState] = useState('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isAiQuiz, setIsAiQuiz] = useState(false);
  const [aiQuestions, setAiQuestions] = useState([]);
  const [aiResult, setAiResult] = useState(null);
  const { toast } = useToast();

  const handleStartQuiz = () => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsAiQuiz(false);
    setAiQuestions([]);
  };

  const handleStartAiQuiz = async () => {
    setQuizState('ai-loading');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsAiQuiz(true);
    setAiResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-ai-quiz', {
        body: { type: 'questions' }
      });

      if (error) {
        console.error('Error generating AI quiz:', error);
        toast({
          title: "Error",
          description: "Failed to generate AI quiz. Please try again.",
          variant: "destructive"
        });
        setQuizState('landing');
        return;
      }

      if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive"
        });
        setQuizState('landing');
        return;
      }

      setAiQuestions(data.questions);
      setQuizState('quiz');
    } catch (err) {
      console.error('Error:', err);
      toast({
        title: "Error",
        description: "Failed to generate AI quiz. Please try again.",
        variant: "destructive"
      });
      setQuizState('landing');
    }
  };

  const handleAnswer = async (answerIndex) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    const questions = isAiQuiz ? aiQuestions : quizQuestions;

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    } else {
      if (isAiQuiz) {
        setQuizState('ai-loading');
        
        try {
          const { data, error } = await supabase.functions.invoke('generate-ai-quiz', {
            body: { 
              type: 'result',
              answers: newAnswers,
              questions: aiQuestions
            }
          });

          if (error) {
            console.error('Error generating AI result:', error);
            toast({
              title: "Error",
              description: "Failed to generate result. Please try again.",
              variant: "destructive"
            });
            setQuizState('landing');
            return;
          }

          if (data.error) {
            toast({
              title: "Error",
              description: data.error,
              variant: "destructive"
            });
            setQuizState('landing');
            return;
          }

          setAiResult(data);
          setQuizState('result');
        } catch (err) {
          console.error('Error:', err);
          toast({
            title: "Error",
            description: "Failed to generate result. Please try again.",
            variant: "destructive"
          });
          setQuizState('landing');
        }
      } else {
        setTimeout(() => {
          setQuizState('result');
        }, 300);
      }
    }
  };

  const handleRetakeQuiz = () => {
    setQuizState('landing');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsAiQuiz(false);
    setAiQuestions([]);
    setAiResult(null);
  };

  if (quizState === 'landing') {
    return <QuizLanding onStartQuiz={handleStartQuiz} onStartAiQuiz={handleStartAiQuiz} />;
  }

  if (quizState === 'ai-loading') {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-quiz-primary mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {currentQuestionIndex === 0 ? 'Generating Your Personalized Quiz...' : 'Analyzing Your Results...'}
          </h2>
          <p className="text-muted-foreground">
            {currentQuestionIndex === 0 
              ? 'Our AI is creating unique questions just for you!' 
              : 'Creating your personalized personality profile...'}
          </p>
        </div>
      </div>
    );
  }

  if (quizState === 'quiz') {
    const questions = isAiQuiz ? aiQuestions : quizQuestions;
    return (
      <QuizQuestion
        question={questions[currentQuestionIndex]}
        currentQuestion={currentQuestionIndex}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  const result = isAiQuiz ? aiResult : calculatePersonalityResult(answers);
  
  return <QuizResult result={result} onRetakeQuiz={handleRetakeQuiz} isAiGenerated={isAiQuiz} />;
}
