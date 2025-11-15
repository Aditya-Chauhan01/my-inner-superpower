import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/quiz-hero.jpg";
import { Sparkles } from "lucide-react";

interface QuizLandingProps {
  onStartQuiz: () => void;
  onStartAiQuiz: () => void;
}

export default function QuizLanding({ onStartQuiz, onStartAiQuiz }: QuizLandingProps) {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
          ParsonaPath
        </h1>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Personality quiz hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-80" />
        </div>
        
        <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Discover Your True
            <span className="bg-gradient-accent bg-clip-text text-transparent block">
              Personality
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Take our fun, science-based quiz to uncover your unique personality traits, 
            strengths, and areas for growth. Perfect for students ready to understand themselves better!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              onClick={onStartQuiz}
              size="lg"
              className="bg-white text-quiz-primary hover:bg-white/90 shadow-button transition-smooth text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl font-semibold w-full sm:w-auto"
            >
              Start Standard Quiz 🚀
            </Button>
            <Button
              onClick={onStartAiQuiz}
              size="lg"
              className="bg-gradient-to-r from-quiz-accent to-quiz-warning text-white hover:opacity-90 shadow-button transition-smooth text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              AI Generate Quiz ✨
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="p-6 sm:p-8 text-center shadow-card hover:shadow-glow transition-smooth border-0 bg-white/80 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-quiz-primary">⚡</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Quick & Fun</h3>
            <p className="text-muted-foreground leading-relaxed">
              Just 18 engaging questions that take about 5 minutes to complete. 
              No boring academic jargon!
            </p>
          </Card>
          
          <Card className="p-6 sm:p-8 text-center shadow-card hover:shadow-glow transition-smooth border-0 bg-white/80 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-quiz-secondary">🎯</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Personalized Results</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get detailed insights into your personality type with strengths, 
              challenges, and practical improvement tips.
            </p>
          </Card>
          
          <Card className="p-6 sm:p-8 text-center shadow-card hover:shadow-glow transition-smooth border-0 bg-white/80 backdrop-blur-sm sm:col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-quiz-accent">🌟</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Growth Focused</h3>
            <p className="text-muted-foreground leading-relaxed">
              Discover actionable ways to develop your skills and build on 
              your natural strengths for personal growth.
            </p>
          </Card>
        </div>
      </div>

      {/* What You'll Discover Section */}
      <div className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What You'll Discover About Yourself
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "👑", title: "The Natural Leader", desc: "Born to inspire others" },
              { icon: "💚", title: "The Caring Empath", desc: "Heart-centered connector" },
              { icon: "🧠", title: "The Strategic Thinker", desc: "Analytical problem-solver" },
              { icon: "🚀", title: "The Bold Risk-Taker", desc: "Adventurous innovator" },
              { icon: "🤝", title: "The Reliable Supporter", desc: "Steady team player" }
            ].map((type, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white shadow-card hover:shadow-glow transition-smooth">
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}