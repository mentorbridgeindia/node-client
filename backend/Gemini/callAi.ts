export const callAi = async (mainContent: string, prompt?: string) => {
  if (!prompt) {
    prompt =
      "Analyze this link and rephrase it in a way that is more engaging and easy to understand. Use simple words and phrases. Can you split the content into pages. Each page should not exceed more than 750 characters";
  }
  // https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={{GEMINI_API_KEY}}
  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 1,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    },
  };
  // TODO: call Gemini API with the request body
  return null;
};
