import { SENTENCE_OF_THE_DAY_PROMPT, STUPRO_DB } from "../../constants";
import { switchDatabase } from "../../Database/switchDatabase";
import { callAi } from "../../Gemini/callAi";
import { Sentence } from "../../Models/Sentence";

export const sentenceOfTheDay = async () => {
  switchDatabase(STUPRO_DB);
  const response = await callAi(
    SENTENCE_OF_THE_DAY_PROMPT,
    "",
    "application/json"
  );
  console.log(response);
  if (!response) {
    console.error("No content returned from AI response.");
    return null;
  } else {
    const responseJson = JSON.parse(response);
    await Sentence.create({
      title: responseJson.title,
      content: responseJson.content,
    });
  }
};
