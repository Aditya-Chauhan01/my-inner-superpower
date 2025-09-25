import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QuizQuestion as QuizQuestionType } from "@/data/quizData";

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (answerIndex: number) => void;
}

export default function QuizQuestion({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer 
}: QuizQuestionProps) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Progress Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-quiz-primary">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-3 bg-white/50" />
        </div>

        {/* Question Card */}
        <Card className="p-8 shadow-glow border-0 bg-white/90 backdrop-blur-sm mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white text-2xl font-bold mb-4 shadow-button">
              {currentQuestion + 1}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {question.question}
            </h2>
            {question.type === 'scenario' && (
              <p className="text-quiz-primary font-medium mt-3">
                Choose the option that best describes how you'd react
              </p>
            )}
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => onAnswer(index)}
                variant="outline"
                className="w-full p-6 text-left h-auto border-2 border-border hover:border-quiz-primary hover:bg-quiz-primary/5 transition-smooth text-foreground hover:shadow-card group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary text-white flex items-center justify-center text-sm font-semibold group-hover:scale-110 transition-bounce">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-base leading-relaxed flex-1">
                    {option.text}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </Card>

        {/* Fun Fact */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            💡 <span className="font-medium">Did you know?</span> There are no right or wrong answers - 
            just be honest about what feels most natural to you!
          </p>
        </div>
      </div>
    </div>
  );
}