import { CODING_CHALLENGE_PROMPT, STUPRO_DB } from "../../constants";
import { switchDatabase } from "../../Database/switchDatabase";
import { callAi } from "../../Gemini/callAi";
import { CodingChallenge } from "../../Models/CodingChallenge";

export const codingChallenge = async () => {
  switchDatabase(STUPRO_DB);
  const languages = [
    "Spring boot",
    "React",
    "Node",
    "Express",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "C++",
    "C",
  ];
  for (let language of languages) {
    const response = await callAi(
      CODING_CHALLENGE_PROMPT,
      language,
      "application/json"
    );
    if (!response) {
      console.error("No content returned from AI response.");
      return null;
    } else {
      const responseJson = JSON.parse(response);
      await CodingChallenge.create({
        title: responseJson.title,
        goal: responseJson.goal,
        steps: responseJson.steps,
        learnings: responseJson.learnings,
        category: language,
      });
    }
  }
};
