export const quizQuestions = [
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
        text: "Take it as a challenge to improve immediately",
        traits: { leadership: 4, empathy: 2, riskTaking: 3, ego: 2, emotions: 2, attitude: 5 }
      },
      {
        text: "Listen carefully and reflect on it later",
        traits: { leadership: 2, empathy: 4, riskTaking: 1, ego: 1, emotions: 3, attitude: 3 }
      },
      {
        text: "Get defensive at first, but eventually consider it",
        traits: { leadership: 3, empathy: 2, riskTaking: 2, ego: 4, emotions: 4, attitude: 2 }
      },
      {
        text: "Feel hurt but try not to show it",
        traits: { leadership: 1, empathy: 5, riskTaking: 0, ego: 1, emotions: 5, attitude: 2 }
      }
    ]
  },
  {
    id: 6,
    question: "You have an important exam tomorrow, but your best friend really needs to talk. What do you do?",
    type: "scenario",
    options: [
      {
        text: "Tell them I need to study but we can talk briefly",
        traits: { leadership: 3, empathy: 3, riskTaking: 2, ego: 2, emotions: 2, attitude: 4 }
      },
      {
        text: "Put my studies aside - friends come first",
        traits: { leadership: 2, empathy: 5, riskTaking: 3, ego: 0, emotions: 5, attitude: 3 }
      },
      {
        text: "Promise to talk right after the exam",
        traits: { leadership: 4, empathy: 2, riskTaking: 1, ego: 3, emotions: 1, attitude: 4 }
      }
    ]
  },
  {
    id: 7,
    question: "Pick a superpower:",
    type: "oneliners",
    options: [
      {
        text: "Mind reading - know what everyone thinks",
        traits: { leadership: 4, empathy: 3, riskTaking: 2, ego: 3, emotions: 3, attitude: 4 }
      },
      {
        text: "Flying - freedom to go anywhere",
        traits: { leadership: 3, empathy: 2, riskTaking: 5, ego: 4, emotions: 4, attitude: 5 }
      },
      {
        text: "Healing powers - help people feel better",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 1, emotions: 5, attitude: 3 }
      },
      {
        text: "Time control - freeze or speed up moments",
        traits: { leadership: 5, empathy: 2, riskTaking: 3, ego: 3, emotions: 2, attitude: 4 }
      }
    ]
  },
  {
    id: 8,
    question: "You're planning a weekend trip with friends. What's your role?",
    type: "scenario",
    options: [
      {
        text: "I'll research and organize the whole itinerary",
        traits: { leadership: 5, empathy: 2, riskTaking: 2, ego: 3, emotions: 1, attitude: 5 }
      },
      {
        text: "I'll go with the flow and support whatever everyone wants",
        traits: { leadership: 1, empathy: 5, riskTaking: 2, ego: 0, emotions: 3, attitude: 3 }
      },
      {
        text: "I'll suggest fun, spontaneous activities",
        traits: { leadership: 3, empathy: 3, riskTaking: 5, ego: 3, emotions: 4, attitude: 5 }
      },
      {
        text: "I'll help coordinate but prefer not to take full control",
        traits: { leadership: 3, empathy: 4, riskTaking: 2, ego: 2, emotions: 2, attitude: 4 }
      }
    ]
  },
  {
    id: 9,
    question: "Someone spreads a rumor about you. Your reaction?",
    type: "oneliners",
    options: [
      {
        text: "Confront them directly and set the record straight",
        traits: { leadership: 5, empathy: 1, riskTaking: 4, ego: 4, emotions: 3, attitude: 5 }
      },
      {
        text: "Ignore it - the truth will come out eventually",
        traits: { leadership: 2, empathy: 3, riskTaking: 1, ego: 2, emotions: 2, attitude: 3 }
      },
      {
        text: "Feel hurt but try to understand why they did it",
        traits: { leadership: 1, empathy: 5, riskTaking: 0, ego: 0, emotions: 5, attitude: 2 }
      },
      {
        text: "Talk to mutual friends to clear my name",
        traits: { leadership: 3, empathy: 3, riskTaking: 2, ego: 3, emotions: 3, attitude: 4 }
      }
    ]
  },
  {
    id: 10,
    question: "You have free time to learn something new. What sounds most appealing?",
    type: "scenario",
    options: [
      {
        text: "Leadership or public speaking course",
        traits: { leadership: 5, empathy: 2, riskTaking: 3, ego: 4, emotions: 2, attitude: 5 }
      },
      {
        text: "Psychology or counseling skills",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 1, emotions: 4, attitude: 3 }
      },
      {
        text: "Extreme sport or adventure skill",
        traits: { leadership: 3, empathy: 1, riskTaking: 5, ego: 3, emotions: 3, attitude: 4 }
      },
      {
        text: "Creative art or music",
        traits: { leadership: 2, empathy: 4, riskTaking: 2, ego: 2, emotions: 5, attitude: 4 }
      }
    ]
  },
  {
    id: 11,
    question: "At a party, where are you most likely to be found?",
    type: "oneliners",
    options: [
      {
        text: "Center of attention, entertaining everyone",
        traits: { leadership: 5, empathy: 2, riskTaking: 4, ego: 5, emotions: 4, attitude: 5 }
      },
      {
        text: "Having deep conversations in a corner",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 1, emotions: 4, attitude: 3 }
      },
      {
        text: "Making sure everyone feels included",
        traits: { leadership: 3, empathy: 5, riskTaking: 2, ego: 1, emotions: 4, attitude: 4 }
      },
      {
        text: "Probably left early to do my own thing",
        traits: { leadership: 1, empathy: 2, riskTaking: 2, ego: 3, emotions: 2, attitude: 2 }
      }
    ]
  },
  {
    id: 12,
    question: "You witness someone being bullied. What do you do?",
    type: "scenario",
    options: [
      {
        text: "Step in immediately and defend them",
        traits: { leadership: 5, empathy: 4, riskTaking: 5, ego: 2, emotions: 3, attitude: 5 }
      },
      {
        text: "Report it to an authority figure",
        traits: { leadership: 3, empathy: 4, riskTaking: 2, ego: 1, emotions: 2, attitude: 4 }
      },
      {
        text: "Comfort the victim afterward",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 0, emotions: 5, attitude: 3 }
      },
      {
        text: "Get a group of friends to confront the bully",
        traits: { leadership: 4, empathy: 3, riskTaking: 4, ego: 3, emotions: 3, attitude: 5 }
      }
    ]
  },
  {
    id: 13,
    question: "When making decisions, you rely most on:",
    type: "oneliners",
    options: [
      {
        text: "Logic and facts",
        traits: { leadership: 4, empathy: 2, riskTaking: 2, ego: 3, emotions: 1, attitude: 4 }
      },
      {
        text: "My gut feeling and intuition",
        traits: { leadership: 2, empathy: 4, riskTaking: 3, ego: 2, emotions: 5, attitude: 3 }
      },
      {
        text: "What's best for everyone involved",
        traits: { leadership: 3, empathy: 5, riskTaking: 1, ego: 1, emotions: 4, attitude: 4 }
      },
      {
        text: "Taking calculated risks for big rewards",
        traits: { leadership: 5, empathy: 2, riskTaking: 5, ego: 4, emotions: 2, attitude: 5 }
      }
    ]
  },
  {
    id: 14,
    question: "You're given a creative project with complete freedom. What do you create?",
    type: "scenario",
    options: [
      {
        text: "Something bold and unconventional that gets attention",
        traits: { leadership: 4, empathy: 2, riskTaking: 5, ego: 5, emotions: 4, attitude: 5 }
      },
      {
        text: "Something meaningful that tells an emotional story",
        traits: { leadership: 2, empathy: 5, riskTaking: 2, ego: 2, emotions: 5, attitude: 4 }
      },
      {
        text: "Something practical and well-organized",
        traits: { leadership: 5, empathy: 2, riskTaking: 1, ego: 3, emotions: 1, attitude: 4 }
      },
      {
        text: "Something that brings people together",
        traits: { leadership: 3, empathy: 5, riskTaking: 2, ego: 1, emotions: 4, attitude: 4 }
      }
    ]
  },
  {
    id: 15,
    question: "How do you react when plans suddenly change?",
    type: "oneliners",
    options: [
      {
        text: "Get frustrated but adapt quickly",
        traits: { leadership: 4, empathy: 2, riskTaking: 3, ego: 3, emotions: 3, attitude: 4 }
      },
      {
        text: "Go with the flow - change is exciting!",
        traits: { leadership: 2, empathy: 3, riskTaking: 5, ego: 2, emotions: 3, attitude: 5 }
      },
      {
        text: "Need time to process and adjust emotionally",
        traits: { leadership: 2, empathy: 4, riskTaking: 1, ego: 1, emotions: 5, attitude: 2 }
      },
      {
        text: "Take charge and create a new plan",
        traits: { leadership: 5, empathy: 2, riskTaking: 3, ego: 4, emotions: 2, attitude: 5 }
      }
    ]
  },
  {
    id: 16,
    question: "Your ideal career would involve:",
    type: "scenario",
    options: [
      {
        text: "Leading teams and making strategic decisions",
        traits: { leadership: 5, empathy: 2, riskTaking: 3, ego: 4, emotions: 1, attitude: 5 }
      },
      {
        text: "Helping people and making a difference in lives",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 1, emotions: 5, attitude: 3 }
      },
      {
        text: "Creating innovative solutions and taking risks",
        traits: { leadership: 3, empathy: 2, riskTaking: 5, ego: 4, emotions: 2, attitude: 5 }
      },
      {
        text: "Working independently on what I'm passionate about",
        traits: { leadership: 2, empathy: 3, riskTaking: 3, ego: 3, emotions: 4, attitude: 3 }
      }
    ]
  },
  {
    id: 17,
    question: "When you succeed at something, your first thought is:",
    type: "oneliners",
    options: [
      {
        text: "Yes! I knew I could do it!",
        traits: { leadership: 4, empathy: 1, riskTaking: 3, ego: 5, emotions: 3, attitude: 5 }
      },
      {
        text: "I'm grateful for everyone who helped me",
        traits: { leadership: 2, empathy: 5, riskTaking: 1, ego: 1, emotions: 4, attitude: 3 }
      },
      {
        text: "What's the next challenge?",
        traits: { leadership: 5, empathy: 2, riskTaking: 5, ego: 4, emotions: 2, attitude: 5 }
      },
      {
        text: "I hope this makes others proud of me",
        traits: { leadership: 2, empathy: 4, riskTaking: 2, ego: 2, emotions: 5, attitude: 3 }
      }
    ]
  },
  {
    id: 18,
    question: "If you could change one thing about yourself, it would be:",
    type: "scenario",
    options: [
      {
        text: "Be less controlling and trust others more",
        traits: { leadership: 5, empathy: 2, riskTaking: 2, ego: 4, emotions: 2, attitude: 3 }
      },
      {
        text: "Be more confident and assertive",
        traits: { leadership: 2, empathy: 4, riskTaking: 3, ego: 1, emotions: 4, attitude: 3 }
      },
      {
        text: "Think before I leap into things",
        traits: { leadership: 3, empathy: 2, riskTaking: 5, ego: 3, emotions: 3, attitude: 4 }
      },
      {
        text: "Care less about what others think",
        traits: { leadership: 3, empathy: 5, riskTaking: 2, ego: 2, emotions: 5, attitude: 3 }
      }
    ]
  }
];

const personalityTypes = [
  {
    id: "the-natural-leader",
    title: "The Natural Leader",
    subtitle: "Born to Inspire and Guide",
    description: "You're the person everyone looks to when decisions need to be made. Your confidence and organizational skills make you a natural at bringing people together and driving projects forward. You're not afraid to take charge, but you're learning that great leaders also listen.",
    strengths: [
      "Exceptional organizational and planning abilities",
      "Natural confidence that inspires others",
      "Quick decision-making skills",
      "Strong sense of responsibility"
    ],
    weaknesses: [
      "Can be too controlling or bossy at times",
      "Might struggle to delegate tasks",
      "May come across as insensitive when focused on goals",
      "Could benefit from being more flexible"
    ],
    improvements: [
      "Practice active listening - not every situation needs your immediate solution",
      "Learn to trust others with responsibilities",
      "Balance task-focus with relationship-building",
      "Remember that collaboration often beats solo brilliance"
    ],
    color: "#9b87f5",
    icon: "👑"
  },
  {
    id: "the-heart",
    title: "The Heart",
    subtitle: "Emotional Intelligence Superstar",
    description: "You're the friend everyone calls when they need support. Your ability to understand and connect with others' emotions is your superpower. You create safe spaces where people feel heard and valued, though sometimes you need to remember to take care of yourself too.",
    strengths: [
      "Incredibly empathetic and understanding",
      "Creates strong, meaningful relationships",
      "Natural conflict resolver",
      "Makes people feel valued and heard"
    ],
    weaknesses: [
      "May prioritize others' needs over your own",
      "Can take criticism very personally",
      "Might avoid necessary confrontations",
      "Struggle with saying 'no'"
    ],
    improvements: [
      "Set healthy boundaries - it's okay to put yourself first sometimes",
      "Learn that not every problem is yours to solve",
      "Develop assertiveness skills",
      "Practice self-care without guilt"
    ],
    color: "#F97316",
    icon: "❤️"
  },
  {
    id: "the-trailblazer",
    title: "The Trailblazer",
    subtitle: "Risk-Taker Extraordinaire",
    description: "You're the friend who suggests the craziest adventures and actually follows through. Your willingness to take risks and try new things inspires others to step out of their comfort zones. Life is never boring with you around, though sometimes a little planning wouldn't hurt.",
    strengths: [
      "Courageous and adventurous spirit",
      "Brings excitement and energy to any situation",
      "Inspires others to be brave",
      "Excellent at thinking outside the box"
    ],
    weaknesses: [
      "Can be impulsive and act without thinking",
      "May struggle with following rules or structure",
      "Sometimes puts yourself in unnecessary danger",
      "Might have trouble finishing what you start"
    ],
    improvements: [
      "Practice the 'pause and think' technique before big decisions",
      "Learn to appreciate planning and structure",
      "Consider consequences before acting",
      "Balance adventure with responsibility"
    ],
    color: "#3B82F6",
    icon: "🚀"
  },
  {
    id: "the-balanced-soul",
    title: "The Balanced Soul",
    subtitle: "Master of Moderation",
    description: "You're the friend who brings calm and perspective to chaos. You have a rare ability to see all sides of a situation and find middle ground. While others might see you as indecisive, you're actually thoughtfully considering all options before choosing the best path.",
    strengths: [
      "Excellent at seeing multiple perspectives",
      "Level-headed in crisis situations",
      "Natural mediator and peacemaker",
      "Adaptable and flexible"
    ],
    weaknesses: [
      "May struggle with making quick decisions",
      "Can be seen as too neutral or non-committal",
      "Might avoid taking strong stances",
      "Could use more passion and drive"
    ],
    improvements: [
      "Practice being more decisive - trust your gut",
      "It's okay to have strong opinions",
      "Learn when neutrality helps vs. when it hinders",
      "Don't be afraid to show passion for your beliefs"
    ],
    color: "#8B5CF6",
    icon: "⚖️"
  },
  {
    id: "the-confident-achiever",
    title: "The Confident Achiever",
    subtitle: "Self-Assured and Goal-Oriented",
    description: "You know your worth and aren't afraid to show it. Your confidence is magnetic and your ambition is admirable. You set high goals and work hard to achieve them. Just remember that true confidence doesn't need to prove itself constantly.",
    strengths: [
      "Strong self-belief and confidence",
      "Goal-oriented and driven",
      "Natural at self-promotion",
      "Resilient in face of challenges"
    ],
    weaknesses: [
      "Can come across as arrogant or self-centered",
      "May struggle with accepting help",
      "Might dismiss others' contributions",
      "Could be more humble"
    ],
    improvements: [
      "Practice humility - acknowledge others' strengths",
      "Learn that asking for help shows strength, not weakness",
      "Share the spotlight occasionally",
      "Remember that confidence and kindness can coexist"
    ],
    color: "#EAB308",
    icon: "⭐"
  },
  {
    id: "the-emotional-artist",
    title: "The Emotional Artist",
    subtitle: "Deeply Feeling Creative",
    description: "You experience life in vivid colors and intense emotions. Your depth of feeling fuels your creativity and makes you incredibly authentic. You see beauty and meaning where others might miss it, though sometimes you need to remember that not everything is a personal reflection.",
    strengths: [
      "Rich emotional depth and authenticity",
      "Creative and artistic abilities",
      "Strong intuition",
      "Ability to connect deeply with art and people"
    ],
    weaknesses: [
      "Can be overwhelmed by emotions",
      "May take things too personally",
      "Prone to mood swings",
      "Might struggle with emotional regulation"
    ],
    improvements: [
      "Develop emotional management techniques",
      "Practice mindfulness and grounding",
      "Learn to distinguish between your feelings and facts",
      "Channel intense emotions into creative outlets"
    ],
    color: "#EC4899",
    icon: "🎨"
  },
  {
    id: "the-positive-catalyst",
    title: "The Positive Catalyst",
    subtitle: "Optimism Personified",
    description: "Your energy is infectious and your outlook is enviably positive. You see opportunities where others see obstacles and your enthusiasm motivates everyone around you. You're the friend who can turn any situation into an adventure, though remember that it's okay to not be cheerful all the time.",
    strengths: [
      "Naturally optimistic and energetic",
      "Motivates and uplifts others",
      "Sees opportunities everywhere",
      "Creates positive atmosphere"
    ],
    weaknesses: [
      "May overlook real problems or risks",
      "Can be seen as unrealistic",
      "Might dismiss valid concerns",
      "Could struggle with processing negative emotions"
    ],
    improvements: [
      "Learn to acknowledge difficulties while staying positive",
      "Practice realistic optimism",
      "Allow yourself to feel negative emotions too",
      "Balance enthusiasm with practicality"
    ],
    color: "#22C55E",
    icon: "🌟"
  }
];

export function calculatePersonalityResult(answers) {
  const traits = {
    leadership: 0,
    empathy: 0,
    riskTaking: 0,
    ego: 0,
    emotions: 0,
    attitude: 0
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = quizQuestions[questionIndex];
    const selectedOption = question.options[answerIndex];
    
    Object.keys(selectedOption.traits).forEach(trait => {
      traits[trait] += selectedOption.traits[trait];
    });
  });

  const maxScore = answers.length * 5;
  const normalizedTraits = {
    leadership: (traits.leadership / maxScore) * 100,
    empathy: (traits.empathy / maxScore) * 100,
    riskTaking: (traits.riskTaking / maxScore) * 100,
    ego: (traits.ego / maxScore) * 100,
    emotions: (traits.emotions / maxScore) * 100,
    attitude: (traits.attitude / maxScore) * 100
  };

  let personalityType;
  if (normalizedTraits.leadership > 60) {
    personalityType = personalityTypes[0];
  } else if (normalizedTraits.empathy > 60) {
    personalityType = personalityTypes[1];
  } else if (normalizedTraits.riskTaking > 60) {
    personalityType = personalityTypes[2];
  } else if (normalizedTraits.ego > 60) {
    personalityType = personalityTypes[4];
  } else if (normalizedTraits.emotions > 65) {
    personalityType = personalityTypes[5];
  } else if (normalizedTraits.attitude > 65) {
    personalityType = personalityTypes[6];
  } else {
    personalityType = personalityTypes[3];
  }

  return personalityType;
}
