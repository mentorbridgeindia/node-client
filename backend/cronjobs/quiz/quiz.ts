import { QUIZ_PROMPT, STUPRO_DB } from "../../constants";
import { switchDatabase } from "../../Database/switchDatabase";
import { callAi } from "../../Gemini/callAi";
import { Quiz } from "../../Models/Quiz";

export const quiz = async () => {
  switchDatabase(STUPRO_DB);
  const topics = [
    "React",
    "React Native",
    "Node",
    "Express",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "C++",
    "C",
    "Data Structures",
    "Angular",
    "NextJS",
    "Number Systems",
    "LCM and HCF",
    "Percentages",
    "Profit and Loss",
    "Simple Interest and Compound Interest",
    "Ratio and Proportion",
    "Averages",
    "Time and Work",
    "Time, Speed, and Distance",
    "Partnership",
    "Mixtures and Allegations",
    "Probability",
    "Blood Relations",
    "Critical Reasoning",
  ];
  for (let topic of topics) {
    const response = await callAi(QUIZ_PROMPT, topic, "application/json");
    if (!response) {
      console.error("No content returned from AI response.");
      return null;
    } else {
      const responseJson = JSON.parse(response);
      await Quiz.create({
        topic: responseJson.topic,
        quiz: responseJson.quiz,
      });
    }
  }
};
