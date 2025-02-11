import { PUZZLE_PROMPT, STUPRO_DB } from "../../constants";
import { switchDatabase } from "../../Database/switchDatabase";
import { callAi } from "../../Gemini/callAi";
import { Puzzle } from "../../Models/Puzzle";

export const puzzle = async () => {
  switchDatabase(STUPRO_DB);
  const response = await callAi(
    PUZZLE_PROMPT,
    "Current Affairs",
    "application/json"
  );
  if (!response) {
    console.error("No content returned from AI response.");
    return null;
  } else {
    const responseJson = JSON.parse(response);
    await Puzzle.create({
      puzzle: responseJson,
    });
  }
};
