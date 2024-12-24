import OpenAI from "openai";

export const callAi = async (mainContent: string, prompt?: string) => {
  const openai = new OpenAI({
    apiKey:
      "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",
  });
  if (!prompt) {
    prompt =
      "Analyze this link and rephrase it in a way that is more engaging and easy to understand. Use simple words and phrases. Can you split the content into pages. Each page should not exceed more than 750 characters";
  }

  const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: false,
    messages: [{ role: "user", content: prompt + "\n\n" + mainContent }],
  });

  const result = await completion.then((result) => {
    console.log(result.choices[0].message);
    return result.choices[0].message;
  });
  return result;
};
