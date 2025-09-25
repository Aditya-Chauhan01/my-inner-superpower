import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PersonalityResult } from "@/data/quizData";
import { useState } from "react";

interface QuizResultProps {
  result: PersonalityResult;
  onRetakeQuiz: () => void;
}

export default function QuizResult({ result, onRetakeQuiz }: QuizResultProps) {
  const [showShareMessage, setShowShareMessage] = useState(false);

  const handleShare = () => {
    const shareText = `I just discovered I'm "${result.title}" - ${result.subtitle}! Take this personality quiz to find out your type.`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Personality Quiz Result',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText + ` ${window.location.href}`);
      setShowShareMessage(true);
      setTimeout(() => setShowShareMessage(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Personality Results Are In! 🎉
          </h1>
          <p className="text-lg text-muted-foreground">
            Here's what makes you uniquely awesome
          </p>
        </div>

        {/* Main Result Card */}
        <Card className="p-8 md:p-12 shadow-glow border-0 bg-white/90 backdrop-blur-sm mb-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{result.icon}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {result.title}
            </h2>
            <p className="text-xl text-quiz-primary font-semibold mb-4">
              {result.subtitle}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {result.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={handleShare}
              className="bg-gradient-primary text-white hover:opacity-90 shadow-button transition-smooth px-8 py-3 rounded-xl font-semibold"
            >
              Share Your Result 📱
            </Button>
            <Button
              onClick={onRetakeQuiz}
              variant="outline"
              className="border-2 border-quiz-primary text-quiz-primary hover:bg-quiz-primary/5 px-8 py-3 rounded-xl font-semibold"
            >
              Take Quiz Again 🔄
            </Button>
          </div>

          {showShareMessage && (
            <div className="text-center">
              <Badge className="bg-quiz-success text-white">
                ✅ Link copied to clipboard!
              </Badge>
            </div>
          )}
        </Card>

        {/* Detailed Analysis */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Strengths */}
          <Card className="p-6 shadow-card border-0 bg-white/80 backdrop-blur-sm">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-quiz-success/10 text-quiz-success flex items-center justify-center mx-auto mb-3 text-2xl">
                💪
              </div>
              <h3 className="text-xl font-bold text-foreground">Your Strengths</h3>
            </div>
            <ul className="space-y-3">
              {result.strengths.map((strength, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-quiz-success mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed text-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Areas to Watch */}
          <Card className="p-6 shadow-card border-0 bg-white/80 backdrop-blur-sm">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-quiz-warning/10 text-quiz-warning flex items-center justify-center mx-auto mb-3 text-2xl">
                ⚠️
              </div>
              <h3 className="text-xl font-bold text-foreground">Areas to Watch</h3>
            </div>
            <ul className="space-y-3">
              {result.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-quiz-warning mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed text-foreground">{weakness}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Growth Tips */}
          <Card className="p-6 shadow-card border-0 bg-white/80 backdrop-blur-sm">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-quiz-primary/10 text-quiz-primary flex items-center justify-center mx-auto mb-3 text-2xl">
                🌱
              </div>
              <h3 className="text-xl font-bold text-foreground">Growth Tips</h3>
            </div>
            <ul className="space-y-3">
              {result.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-quiz-primary mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed text-foreground">{improvement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 p-6 rounded-xl bg-white/50 backdrop-blur-sm">
          <p className="text-muted-foreground mb-4">
            🌟 Remember, personality is just one piece of who you are. Use these insights 
            as a starting point for self-discovery and growth!
          </p>
          <p className="text-sm text-muted-foreground">
            Want to learn more about yourself? Consider discussing these results with 
            friends, family, or a mentor to gain even deeper insights.
          </p>
        </div>
      </div>
    </div>
  );
}