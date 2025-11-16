import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function QuizResult({ result, onRetakeQuiz, isAiGenerated = false }) {
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
            {isAiGenerated && (
              <Badge className="bg-gradient-to-r from-quiz-accent to-quiz-warning text-white mb-3">
                <Sparkles className="w-3 h-3 mr-1 inline" />
                AI Generated Result
              </Badge>
            )}
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
                <li key={index} className="flex items-start">
                  <span className="text-quiz-success mr-2 flex-shrink-0">✓</span>
                  <span className="text-foreground leading-relaxed">{strength}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Areas for Growth */}
          <Card className="p-6 shadow-card border-0 bg-white/80 backdrop-blur-sm">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-quiz-warning/10 text-quiz-warning flex items-center justify-center mx-auto mb-3 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-foreground">Areas to Develop</h3>
            </div>
            <ul className="space-y-3">
              {result.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-quiz-warning mr-2 flex-shrink-0">→</span>
                  <span className="text-foreground leading-relaxed">{weakness}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* How to Improve */}
          <Card className="p-6 shadow-card border-0 bg-white/80 backdrop-blur-sm">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-quiz-accent/10 text-quiz-accent flex items-center justify-center mx-auto mb-3 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold text-foreground">Growth Tips</h3>
            </div>
            <ul className="space-y-3">
              {result.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-quiz-accent mr-2 flex-shrink-0">★</span>
                  <span className="text-foreground leading-relaxed">{improvement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 px-4">
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Remember, personality is complex and dynamic! Use these insights as a starting point for 
            self-reflection and growth. Your unique combination of traits is what makes you special! 🌟
          </p>
        </div>
      </div>
    </div>
  );
}
