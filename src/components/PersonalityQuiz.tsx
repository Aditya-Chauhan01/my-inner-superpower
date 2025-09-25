import { useState } from "react";
import { quizQuestions, calculatePersonalityResult } from "@/data/quizData";
import QuizLanding from "./QuizLanding";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

type QuizState = 'landing' | 'quiz' | 'result';

export default function PersonalityQuiz() {
  const [quizState, setQuizState] = useState<QuizState>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStartQuiz = () => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      // Move to next question with a small delay for better UX
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    } else {
      // Quiz completed, show results
      setTimeout(() => {
        setQuizState('result');
      }, 300);
    }
  };

  const handleRetakeQuiz = () => {
    setQuizState('landing');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  if (quizState === 'landing') {
    return <QuizLanding onStartQuiz={handleStartQuiz} />;
  }

  if (quizState === 'quiz') {
    return (
      <QuizQuestion
        question={quizQuestions[currentQuestionIndex]}
        currentQuestion={currentQuestionIndex}
        totalQuestions={quizQuestions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  // Calculate and show results
  const result = calculatePersonalityResult(answers);
  return <QuizResult result={result} onRetakeQuiz={handleRetakeQuiz} />;
}