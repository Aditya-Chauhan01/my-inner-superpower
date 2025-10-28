import { useState } from "react";
import { quizQuestions, calculatePersonalityResult, QuizQuestion as QuizQuestionType, PersonalityResult } from "@/data/quizData";
import QuizLanding from "./QuizLanding";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type QuizState = 'landing' | 'quiz' | 'result' | 'ai-loading';

export default function PersonalityQuiz() {
  const [quizState, setQuizState] = useState<QuizState>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isAiQuiz, setIsAiQuiz] = useState(false);
  const [aiQuestions, setAiQuestions] = useState<QuizQuestionType[]>([]);
  const [aiResult, setAiResult] = useState<PersonalityResult | null>(null);
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

  const handleAnswer = async (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    const questions = isAiQuiz ? aiQuestions : quizQuestions;

    if (currentQuestionIndex < questions.length - 1) {
      // Move to next question with a small delay for better UX
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    } else {
      // Quiz completed, show results
      if (isAiQuiz) {
        // Generate AI result
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
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-quiz-primary/20 via-quiz-secondary/20 to-quiz-accent/20">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="relative">
            <div className="w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-quiz-primary/30"></div>
              <div className="absolute inset-0 rounded-full border-4 border-t-quiz-primary animate-spin"></div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
              {isAiQuiz && aiQuestions.length === 0 ? 'Creating Your Quiz...' : 'Analyzing Your Personality...'}
            </h2>
            <p className="text-muted-foreground">
              {isAiQuiz && aiQuestions.length === 0 
                ? 'Our AI is crafting personalized questions just for you' 
                : 'AI is generating your unique personality profile'}
            </p>
          </div>
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

  // Calculate and show results
  const result = isAiQuiz && aiResult ? aiResult : calculatePersonalityResult(answers);
  return <QuizResult result={result} onRetakeQuiz={handleRetakeQuiz} isAiGenerated={isAiQuiz} />;
}