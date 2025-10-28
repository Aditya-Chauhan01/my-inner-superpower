import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const { type } = await req.json();
    console.log('Generating AI quiz, type:', type);

    if (type === 'questions') {
      // Generate quiz questions
      const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            {
              role: 'system',
              content: 'You are a personality quiz expert. Generate engaging, fun quiz questions for students. Each question should help reveal personality traits like leadership, empathy, risk-taking, ego, emotions, and attitude.'
            },
            {
              role: 'user',
              content: 'Generate exactly 18 personality quiz questions. Mix one-liner questions and scenario-based questions. Each question should have 3-4 answer options. Return ONLY valid JSON in this exact format: {"questions": [{"id": number, "question": string, "type": "oneliners" or "scenario", "options": [{"text": string, "traits": {"leadership": 0-5, "empathy": 0-5, "riskTaking": 0-5, "ego": 0-5, "emotions": 0-5, "attitude": 0-5}}]}]}'
            }
          ],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('AI API error:', response.status, errorText);
        
        if (response.status === 429) {
          return new Response(
            JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
            { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        if (response.status === 402) {
          return new Response(
            JSON.stringify({ error: 'AI credits depleted. Please add credits to continue.' }),
            { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        throw new Error(`AI API error: ${response.status}`);
      }

      const data = await response.json();
      let content = data.choices[0].message.content;
      
      // Clean up the response to extract JSON
      content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      
      const quizData = JSON.parse(content);
      console.log('Generated quiz questions:', quizData.questions.length);
      
      return new Response(
        JSON.stringify(quizData),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else if (type === 'result') {
      // Generate personality result
      const { answers, questions } = await req.json();
      
      // Calculate trait totals
      const totalTraits = {
        leadership: 0,
        empathy: 0,
        riskTaking: 0,
        ego: 0,
        emotions: 0,
        attitude: 0
      };

      answers.forEach((answerIndex: number, questionIndex: number) => {
        const question = questions[questionIndex];
        const selectedOption = question.options[answerIndex];
        
        Object.keys(totalTraits).forEach(trait => {
          totalTraits[trait as keyof typeof totalTraits] += selectedOption.traits[trait as keyof typeof selectedOption.traits];
        });
      });

      console.log('Calculated traits:', totalTraits);

      const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            {
              role: 'system',
              content: 'You are a personality analysis expert. Generate personalized, encouraging personality analysis for students based on their quiz results.'
            },
            {
              role: 'user',
              content: `Based on these personality trait scores, generate a comprehensive personality analysis:
Leadership: ${totalTraits.leadership}
Empathy: ${totalTraits.empathy}
Risk-Taking: ${totalTraits.riskTaking}
Ego: ${totalTraits.ego}
Emotions: ${totalTraits.emotions}
Attitude: ${totalTraits.attitude}

Return ONLY valid JSON in this exact format:
{
  "title": "A catchy 2-4 word personality type title",
  "subtitle": "A brief one-line description",
  "description": "2-3 sentences about this personality type",
  "strengths": ["strength 1", "strength 2", "strength 3", "strength 4", "strength 5"],
  "weaknesses": ["weakness 1", "weakness 2", "weakness 3", "weakness 4"],
  "improvements": ["improvement tip 1", "improvement tip 2", "improvement tip 3", "improvement tip 4", "improvement tip 5"],
  "color": "quiz-primary",
  "icon": "👤"
}

Use fun, encouraging language suitable for students. Make it personal and insightful.`
            }
          ],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('AI API error:', response.status, errorText);
        
        if (response.status === 429) {
          return new Response(
            JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
            { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        if (response.status === 402) {
          return new Response(
            JSON.stringify({ error: 'AI credits depleted. Please add credits to continue.' }),
            { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        throw new Error(`AI API error: ${response.status}`);
      }

      const data = await response.json();
      let content = data.choices[0].message.content;
      
      // Clean up the response to extract JSON
      content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      
      const result = JSON.parse(content);
      result.id = 'ai-generated';
      console.log('Generated personality result:', result.title);
      
      return new Response(
        JSON.stringify(result),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    throw new Error('Invalid type parameter');
  } catch (error) {
    console.error('Error in generate-ai-quiz:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
