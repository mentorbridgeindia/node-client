import axios from "axios";

export const callAi = async (
  prompt: string,
  mainContent: string,
  responseType?: string
) => {
  const generationConfig = {
    temperature: 2,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  if (responseType) {
    generationConfig.responseMimeType = "application/json";
  }

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: prompt + "\n" + mainContent,
          },
        ],
      },
    ],
    generationConfig,
  };
  console.log("Generating AI response", requestBody);
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAyhAfOqUr0dQy9DTbPPALKMoA7KGkw55M",
      requestBody
    );
    console.log("AI response:", response.data);
    const aiResponse = response.data?.candidates[0]?.content?.parts[0]?.text;
    if (!aiResponse) {
      console.error("No content returned from AI response.");
      return null;
    }
    console.log(aiResponse);
    return aiResponse;
  } catch (error) {
    console.error("Error during AI response generation:", error);
    return null;
  }
};
