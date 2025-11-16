import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function QuizQuestion({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer 
}) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="w-full max-w-3xl px-2 sm:px-0">
        {/* Progress Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-3 sm:mb-4 gap-2">
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-xs sm:text-sm font-medium text-quiz-primary">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2 sm:h-3 bg-white/50" />
        </div>

        {/* Question Card */}
        <Card className="p-3 sm:p-6 md:p-8 shadow-glow border-0 bg-white/90 backdrop-blur-sm mb-4 sm:mb-8">
          <div className="text-center mb-4 sm:mb-8">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-primary text-white text-lg sm:text-2xl font-bold mb-2 sm:mb-4 shadow-button">
              {currentQuestion + 1}
            </div>
            <h2 className="text-base sm:text-2xl md:text-3xl font-bold text-foreground leading-tight px-1 break-words">
              {question.question}
            </h2>
            {question.type === 'scenario' && (
              <p className="text-quiz-primary font-medium mt-2 sm:mt-3 text-xs sm:text-base px-1">
                Choose the option that best describes how you'd react
              </p>
            )}
          </div>

          {/* Answer Options */}
          <div className="space-y-2 sm:space-y-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => onAnswer(index)}
                variant="outline"
                className="w-full p-3 sm:p-6 text-left h-auto border-2 border-border hover:border-quiz-primary hover:scale-[1.02] sm:hover:scale-105 transition-smooth text-foreground hover:shadow-card group"
              >
                <div className="flex items-start space-x-2 sm:space-x-4 min-w-0">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-primary text-white flex items-center justify-center text-xs sm:text-sm font-semibold">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-xs sm:text-base leading-relaxed flex-1 min-w-0 break-words overflow-wrap-anywhere">
                    {option.text}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </Card>

        {/* Fun Fact */}
        <div className="text-center px-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            💡 <span className="font-medium">Did you know?</span> There are no right or wrong answers - 
            just be honest about what feels most natural to you!
          </p>
        </div>
      </div>
    </div>
  );
}
