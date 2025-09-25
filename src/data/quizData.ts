export interface QuizQuestion {
  id: number;
  question: string;
  type: 'oneliners' | 'scenario';
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  traits: {
    leadership: number;
    empathy: number;
    riskTaking: number;
    ego: number;
    emotions: number;
    attitude: number;
  };
}

export interface PersonalityResult {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
  color: string;
  icon: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Your friend is having a crisis. What's your first instinct?",
    type: "oneliners",
    options: [
      {
        text: "Drop everything and rush over to help",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 0, emotions: 4, attitude: 3 }
      },
      {
        text: "Listen carefully and offer practical advice",
        traits: { leadership: 3, empathy: 4, riskTaking: 0, ego: 1, emotions: 2, attitude: 4 }
      },
      {
        text: "Give them space but check in later",
        traits: { leadership: 1, empathy: 3, riskTaking: 2, ego: 2, emotions: 1, attitude: 3 }
      }
    ]
  },
  {
    id: 2,
    question: "You're assigned to lead a group project. How do you start?",
    type: "scenario",
    options: [
      {
        text: "Create a detailed plan and assign specific roles to everyone",
        traits: { leadership: 5, empathy: 2, riskTaking: 1, ego: 3, emotions: 1, attitude: 4 }
      },
      {
        text: "Get everyone's input first, then decide together",
        traits: { leadership: 3, empathy: 5, riskTaking: 2, ego: 1, emotions: 3, attitude: 4 }
      },
      {
        text: "Suggest ideas but let others take charge if they want",
        traits: { leadership: 1, empathy: 4, riskTaking: 1, ego: 0, emotions: 2, attitude: 2 }
      },
      {
        text: "Jump in with bold, creative ideas to inspire the team",
        traits: { leadership: 4, empathy: 2, riskTaking: 5, ego: 4, emotions: 4, attitude: 5 }
      }
    ]
  },
  {
    id: 3,
    question: "What's your ideal Friday night?",
    type: "oneliners",
    options: [
      {
        text: "Hosting a party with all my friends",
        traits: { leadership: 4, empathy: 3, riskTaking: 3, ego: 4, emotions: 5, attitude: 5 }
      },
      {
        text: "Cozy movie night with my closest friends",
        traits: { leadership: 1, empathy: 5, riskTaking: 0, ego: 1, emotions: 4, attitude: 3 }
      },
      {
        text: "Solo time reading or working on a hobby",
        traits: { leadership: 2, empathy: 2, riskTaking: 1, ego: 2, emotions: 2, attitude: 2 }
      }
    ]
  },
  {
    id: 4,
    question: "You discover a mistake in your team's presentation an hour before the deadline. What do you do?",
    type: "scenario",
    options: [
      {
        text: "Rally the team immediately to fix it, no matter what it takes",
        traits: { leadership: 5, empathy: 2, riskTaking: 4, ego: 3, emotions: 3, attitude: 5 }
      },
      {
        text: "Calmly assess if it's worth fixing given the time constraint",
        traits: { leadership: 3, empathy: 3, riskTaking: 2, ego: 2, emotions: 1, attitude: 4 }
      },
      {
        text: "Fix what I can myself and mention it to the team later",
        traits: { leadership: 2, empathy: 1, riskTaking: 3, ego: 1, emotions: 2, attitude: 3 }
      },
      {
        text: "Worry about how this will affect everyone's grades",
        traits: { leadership: 1, empathy: 5, riskTaking: 1, ego: 0, emotions: 5, attitude: 2 }
      }
    ]
  },
  {
    id: 5,
    question: "How do you handle criticism?",
    type: "oneliners",
    options: [
      {
        text: "Take it seriously and work to improve immediately",
        traits: { leadership: 3, empathy: 2, riskTaking: 2, ego: 1, emotions: 2, attitude: 5 }
      },
      {
        text: "Feel hurt but try to understand their perspective",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 2, emotions: 5, attitude: 3 }
      },
      {
        text: "Defend my position if I believe I'm right",
        traits: { leadership: 4, empathy: 1, riskTaking: 3, ego: 5, emotions: 3, attitude: 4 }
      }
    ]
  },
  {
    id: 6,
    question: "You're offered two internships: one safe but boring, one risky but exciting. Which do you choose?",
    type: "scenario",
    options: [
      {
        text: "The safe option - better to guarantee success",
        traits: { leadership: 2, empathy: 3, riskTaking: 0, ego: 1, emotions: 2, attitude: 2 }
      },
      {
        text: "The exciting one - life's too short for boring",
        traits: { leadership: 3, empathy: 2, riskTaking: 5, ego: 4, emotions: 4, attitude: 5 }
      },
      {
        text: "Research both thoroughly before deciding",
        traits: { leadership: 4, empathy: 3, riskTaking: 2, ego: 2, emotions: 1, attitude: 4 }
      },
      {
        text: "Ask mentors and friends for their opinions first",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 1, emotions: 3, attitude: 3 }
      }
    ]
  },
  {
    id: 7,
    question: "What motivates you most?",
    type: "oneliners",
    options: [
      {
        text: "Making a positive impact on others",
        traits: { leadership: 3, empathy: 5, riskTaking: 2, ego: 1, emotions: 4, attitude: 4 }
      },
      {
        text: "Achieving personal excellence and recognition",
        traits: { leadership: 5, empathy: 1, riskTaking: 3, ego: 5, emotions: 2, attitude: 4 }
      },
      {
        text: "Learning new things and solving problems",
        traits: { leadership: 3, empathy: 2, riskTaking: 2, ego: 2, emotions: 1, attitude: 5 }
      }
    ]
  },
  {
    id: 8,
    question: "You're in a heated group debate. How do you typically respond?",
    type: "scenario",
    options: [
      {
        text: "Jump in with strong arguments to prove my point",
        traits: { leadership: 5, empathy: 1, riskTaking: 4, ego: 5, emotions: 3, attitude: 4 }
      },
      {
        text: "Try to find common ground between different views",
        traits: { leadership: 3, empathy: 5, riskTaking: 2, ego: 1, emotions: 3, attitude: 4 }
      },
      {
        text: "Listen more than I speak, then share thoughtful insights",
        traits: { leadership: 2, empathy: 4, riskTaking: 1, ego: 2, emotions: 2, attitude: 5 }
      },
      {
        text: "Stay quiet unless directly asked for my opinion",
        traits: { leadership: 1, empathy: 3, riskTaking: 0, ego: 0, emotions: 2, attitude: 2 }
      }
    ]
  },
  {
    id: 9,
    question: "How do you prefer to work?",
    type: "oneliners",
    options: [
      {
        text: "Leading a dynamic team toward big goals",
        traits: { leadership: 5, empathy: 2, riskTaking: 4, ego: 4, emotions: 3, attitude: 5 }
      },
      {
        text: "Collaborating closely with others I trust",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 1, emotions: 4, attitude: 4 }
      },
      {
        text: "Independently on complex, interesting problems",
        traits: { leadership: 1, empathy: 1, riskTaking: 2, ego: 3, emotions: 1, attitude: 5 }
      }
    ]
  },
  {
    id: 10,
    question: "Your team's struggling with low morale. What's your approach?",
    type: "scenario",
    options: [
      {
        text: "Organize a fun team event to boost everyone's spirits",
        traits: { leadership: 4, empathy: 4, riskTaking: 3, ego: 2, emotions: 5, attitude: 5 }
      },
      {
        text: "Have one-on-one conversations to understand what's wrong",
        traits: { leadership: 3, empathy: 5, riskTaking: 1, ego: 1, emotions: 4, attitude: 4 }
      },
      {
        text: "Focus on improving work processes and efficiency",
        traits: { leadership: 4, empathy: 2, riskTaking: 2, ego: 3, emotions: 1, attitude: 5 }
      },
      {
        text: "Give everyone some space and time to recover naturally",
        traits: { leadership: 1, empathy: 3, riskTaking: 1, ego: 1, emotions: 2, attitude: 2 }
      }
    ]
  },
  {
    id: 11,
    question: "What's your biggest fear in group settings?",
    type: "oneliners",
    options: [
      {
        text: "Not being heard or taken seriously",
        traits: { leadership: 4, empathy: 2, riskTaking: 2, ego: 5, emotions: 4, attitude: 3 }
      },
      {
        text: "Accidentally hurting someone's feelings",
        traits: { leadership: 1, empathy: 5, riskTaking: 0, ego: 0, emotions: 5, attitude: 3 }
      },
      {
        text: "Making a mistake that affects everyone",
        traits: { leadership: 2, empathy: 4, riskTaking: 1, ego: 2, emotions: 4, attitude: 4 }
      }
    ]
  },
  {
    id: 12,
    question: "You have a brilliant idea but it's unconventional. What do you do?",
    type: "scenario",
    options: [
      {
        text: "Present it confidently and convince others it's worth trying",
        traits: { leadership: 5, empathy: 1, riskTaking: 5, ego: 4, emotions: 3, attitude: 5 }
      },
      {
        text: "Test it quietly first, then share if it works",
        traits: { leadership: 2, empathy: 2, riskTaking: 3, ego: 2, emotions: 1, attitude: 4 }
      },
      {
        text: "Get feedback from trusted friends before proposing it",
        traits: { leadership: 3, empathy: 4, riskTaking: 2, ego: 2, emotions: 3, attitude: 4 }
      },
      {
        text: "Keep it to myself rather than risk looking foolish",
        traits: { leadership: 1, empathy: 2, riskTaking: 0, ego: 1, emotions: 3, attitude: 1 }
      }
    ]
  },
  {
    id: 13,
    question: "How do you celebrate achievements?",
    type: "oneliners",
    options: [
      {
        text: "Throw a big celebration and share the success",
        traits: { leadership: 4, empathy: 3, riskTaking: 3, ego: 5, emotions: 5, attitude: 5 }
      },
      {
        text: "Quietly appreciate the moment with close people",
        traits: { leadership: 2, empathy: 4, riskTaking: 1, ego: 1, emotions: 4, attitude: 3 }
      },
      {
        text: "Quickly move on to the next challenge",
        traits: { leadership: 4, empathy: 1, riskTaking: 4, ego: 3, emotions: 1, attitude: 4 }
      }
    ]
  },
  {
    id: 14,
    question: "You notice a classmate is struggling with the material. What do you do?",
    type: "scenario",
    options: [
      {
        text: "Offer to study together and help them understand",
        traits: { leadership: 3, empathy: 5, riskTaking: 2, ego: 1, emotions: 4, attitude: 4 }
      },
      {
        text: "Suggest they talk to the teacher or get a tutor",
        traits: { leadership: 2, empathy: 3, riskTaking: 1, ego: 2, emotions: 2, attitude: 4 }
      },
      {
        text: "Share my notes but focus on my own studies",
        traits: { leadership: 2, empathy: 2, riskTaking: 1, ego: 3, emotions: 1, attitude: 3 }
      },
      {
        text: "Feel bad for them but not sure how to help",
        traits: { leadership: 1, empathy: 4, riskTaking: 0, ego: 1, emotions: 4, attitude: 2 }
      }
    ]
  },
  {
    id: 15,
    question: "What's your approach to deadlines?",
    type: "oneliners",
    options: [
      {
        text: "Plan everything out and finish early",
        traits: { leadership: 4, empathy: 2, riskTaking: 1, ego: 3, emotions: 1, attitude: 5 }
      },
      {
        text: "Work steadily and check in with others regularly",
        traits: { leadership: 3, empathy: 4, riskTaking: 1, ego: 2, emotions: 3, attitude: 4 }
      },
      {
        text: "Thrive under pressure and produce my best work last minute",
        traits: { leadership: 3, empathy: 1, riskTaking: 5, ego: 4, emotions: 4, attitude: 3 }
      }
    ]
  },
  {
    id: 16,
    question: "You're choosing teammates for a competition. Who do you pick?",
    type: "scenario",
    options: [
      {
        text: "The most skilled people, even if I don't know them well",
        traits: { leadership: 4, empathy: 1, riskTaking: 3, ego: 4, emotions: 1, attitude: 5 }
      },
      {
        text: "My friends, because we work well together",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 1, emotions: 4, attitude: 3 }
      },
      {
        text: "A mix of skills and personalities for balance",
        traits: { leadership: 5, empathy: 4, riskTaking: 2, ego: 2, emotions: 2, attitude: 5 }
      },
      {
        text: "People who seem underestimated but have potential",
        traits: { leadership: 3, empathy: 5, riskTaking: 4, ego: 1, emotions: 3, attitude: 4 }
      }
    ]
  },
  {
    id: 17,
    question: "How do you handle stress?",
    type: "oneliners",
    options: [
      {
        text: "Channel it into productive action and problem-solving",
        traits: { leadership: 5, empathy: 1, riskTaking: 3, ego: 3, emotions: 2, attitude: 5 }
      },
      {
        text: "Talk it through with friends and family",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 1, emotions: 5, attitude: 3 }
      },
      {
        text: "Take time alone to think and recharge",
        traits: { leadership: 2, empathy: 2, riskTaking: 1, ego: 2, emotions: 3, attitude: 4 }
      }
    ]
  },
  {
    id: 18,
    question: "You're leading a project that's not going as planned. What's your next move?",
    type: "scenario",
    options: [
      {
        text: "Pivot quickly and try a completely different approach",
        traits: { leadership: 5, empathy: 2, riskTaking: 5, ego: 3, emotions: 3, attitude: 5 }
      },
      {
        text: "Gather the team to brainstorm solutions together",
        traits: { leadership: 4, empathy: 5, riskTaking: 2, ego: 1, emotions: 3, attitude: 4 }
      },
      {
        text: "Analyze what went wrong and create a detailed recovery plan",
        traits: { leadership: 4, empathy: 2, riskTaking: 1, ego: 2, emotions: 1, attitude: 5 }
      },
      {
        text: "Be honest about the challenges and ask for guidance",
        traits: { leadership: 2, empathy: 4, riskTaking: 2, ego: 1, emotions: 4, attitude: 4 }
      }
    ]
  }
];

export const personalityResults: PersonalityResult[] = [
  {
    id: "leader",
    title: "The Natural Leader",
    subtitle: "Born to inspire and guide others",
    description: "You have a magnetic presence and natural ability to motivate people toward shared goals. You're confident in your decisions and aren't afraid to take charge when needed.",
    strengths: [
      "Exceptional ability to motivate and inspire others",
      "Strong decision-making skills under pressure",
      "Natural charisma and communication abilities",
      "Goal-oriented and results-driven mindset",
      "Comfortable taking responsibility for outcomes"
    ],
    weaknesses: [
      "May sometimes appear overly confident or dominant",
      "Can struggle with accepting criticism or feedback",
      "Might overlook others' input when focused on goals",
      "Tendency to take on too much responsibility"
    ],
    improvements: [
      "Practice active listening to better understand team perspectives",
      "Learn to delegate more effectively and trust others' abilities",
      "Work on being more patient with different working styles",
      "Develop emotional intelligence to better connect with team members",
      "Remember to celebrate others' contributions and successes"
    ],
    color: "quiz-primary",
    icon: "👑"
  },
  {
    id: "empath",
    title: "The Caring Empath",
    subtitle: "Heart-centered and deeply understanding",
    description: "You have an incredible ability to understand and connect with others' emotions. People naturally feel comfortable sharing with you because of your genuine care and support.",
    strengths: [
      "Exceptional emotional intelligence and intuition",
      "Creates safe, supportive environments for others",
      "Excellent listener who makes people feel heard",
      "Strong ability to mediate conflicts and build bridges",
      "Deeply caring and loyal to friends and causes"
    ],
    weaknesses: [
      "May absorb others' emotions too deeply, leading to burnout",
      "Can struggle with setting healthy boundaries",
      "Might avoid necessary conflicts to keep peace",
      "Tendency to put others' needs before your own"
    ],
    improvements: [
      "Learn to set clear boundaries to protect your emotional energy",
      "Practice saying 'no' when you're overwhelmed or overcommitted",
      "Develop self-care routines to recharge and reset",
      "Remember that healthy conflict can lead to better outcomes",
      "Work on advocating for your own needs and opinions"
    ],
    color: "quiz-success",
    icon: "💚"
  },
  {
    id: "thinker",
    title: "The Strategic Thinker",
    subtitle: "Analytical mind with creative solutions",
    description: "You approach challenges with logic and creativity, preferring to understand the 'why' behind everything. You excel at seeing patterns and developing innovative solutions.",
    strengths: [
      "Strong analytical and problem-solving abilities",
      "Creative approach to finding innovative solutions",
      "Excellent at planning and strategic thinking",
      "Detail-oriented with high standards for quality",
      "Independent worker who thinks before acting"
    ],
    weaknesses: [
      "May overthink situations or get stuck in analysis paralysis",
      "Can appear distant or disconnected from emotions",
      "Might struggle with quick decision-making under pressure",
      "May undervalue the importance of social connections"
    ],
    improvements: [
      "Practice making quick decisions with incomplete information",
      "Work on communicating your ideas more clearly to others",
      "Develop your emotional intelligence and social skills",
      "Learn to value others' perspectives even when they differ from yours",
      "Remember to consider the human element in your solutions"
    ],
    color: "quiz-secondary",
    icon: "🧠"
  },
  {
    id: "risktaker",
    title: "The Bold Risk-Taker",
    subtitle: "Adventurous spirit with unstoppable energy",
    description: "You thrive on new experiences and aren't afraid to take calculated risks. Your enthusiasm and boldness inspire others to step out of their comfort zones too.",
    strengths: [
      "Comfortable with uncertainty and change",
      "High energy and enthusiasm that motivates others",
      "Willing to try new approaches and innovate",
      "Resilient and bounces back quickly from setbacks",
      "Natural entrepreneur with a growth mindset"
    ],
    weaknesses: [
      "May act impulsively without considering all consequences",
      "Can struggle with routine tasks or detailed planning",
      "Might overlook potential risks in pursuit of opportunities",
      "May have difficulty with long-term commitment to projects"
    ],
    improvements: [
      "Learn to balance spontaneity with strategic planning",
      "Develop patience for routine but necessary tasks",
      "Practice evaluating risks more thoroughly before acting",
      "Work on seeing projects through to completion",
      "Learn from both successes and failures to make better decisions"
    ],
    color: "quiz-accent",
    icon: "🚀"
  },
  {
    id: "supporter",
    title: "The Reliable Supporter",
    subtitle: "Steady presence and trusted friend",
    description: "You're the person everyone can count on. Your reliability, loyalty, and steady presence make you an invaluable team member and friend.",
    strengths: [
      "Extremely reliable and trustworthy",
      "Excellent team player who supports others' success",
      "Strong listening skills and emotional support abilities",
      "Consistent performance and steady work ethic",
      "Creates harmony and stability in group settings"
    ],
    weaknesses: [
      "May struggle with self-advocacy and speaking up",
      "Can be overly accommodating at your own expense",
      "Might avoid taking leadership roles when you'd excel",
      "May underestimate your own abilities and contributions"
    ],
    improvements: [
      "Practice advocating for your ideas and opinions more confidently",
      "Learn to recognize and communicate your own value",
      "Consider taking on leadership opportunities to grow",
      "Work on being more assertive when situations require it",
      "Remember that your voice and perspective matter too"
    ],
    color: "quiz-warning",
    icon: "🤝"
  }
];

export function calculatePersonalityResult(answers: number[]): PersonalityResult {
  const totalTraits = {
    leadership: 0,
    empathy: 0,
    riskTaking: 0,
    ego: 0,
    emotions: 0,
    attitude: 0
  };

  // Calculate total scores for each trait
  answers.forEach((answerIndex, questionIndex) => {
    const question = quizQuestions[questionIndex];
    const selectedOption = question.options[answerIndex];
    
    Object.keys(totalTraits).forEach(trait => {
      totalTraits[trait as keyof typeof totalTraits] += selectedOption.traits[trait as keyof typeof selectedOption.traits];
    });
  });

  // Determine personality type based on dominant traits
  const { leadership, empathy, riskTaking, ego, emotions, attitude } = totalTraits;

  // Leader: High leadership, moderate to high ego and attitude
  if (leadership >= 55 && (ego >= 30 || attitude >= 55)) {
    return personalityResults.find(r => r.id === 'leader')!;
  }
  
  // Empath: High empathy, high emotions, low ego
  if (empathy >= 55 && emotions >= 40 && ego <= 25) {
    return personalityResults.find(r => r.id === 'empath')!;
  }
  
  // Risk-taker: High risk-taking, high attitude, moderate leadership
  if (riskTaking >= 45 && attitude >= 50) {
    return personalityResults.find(r => r.id === 'risktaker')!;
  }
  
  // Thinker: High attitude (thoughtful), moderate leadership, low to moderate emotions
  if (attitude >= 60 && emotions <= 35 && leadership >= 30) {
    return personalityResults.find(r => r.id === 'thinker')!;
  }
  
  // Default to Supporter for balanced or low-scoring profiles
  return personalityResults.find(r => r.id === 'supporter')!;
}