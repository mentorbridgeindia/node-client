import { Model, model, Schema } from "mongoose";

export interface PuzzleEntity {
  puzzle: Puzzle[];
}

interface Puzzle {
  question: string;
  answer: string;
  options: string[];
  answerDetail: string;
}

const puzzleSchema = new Schema<Puzzle>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  options: { type: [String], required: true },
  answerDetail: { type: String, required: true },
});

const PuzzleSchema = new Schema<PuzzleEntity>({
  puzzle: { type: [puzzleSchema], required: true },
});

export const Puzzle: Model<PuzzleEntity> = model<PuzzleEntity>(
  "Puzzle",
  PuzzleSchema,
  "Puzzle"
);
