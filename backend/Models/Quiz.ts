import { Model, model, Schema } from "mongoose";

export interface QuizEntity {
  topic: string;
  quiz: Quiz[];
}

interface Quiz {
  question: string;
  answer: string;
  options: string[];
  answerDetail: string;
  trickOrTip: string;
}

const quizSchema = new Schema<Quiz>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  options: { type: [String], required: true },
  answerDetail: { type: String, required: true },
  trickOrTip: { type: String, required: true },
});

const QuizSchema = new Schema<QuizEntity>({
  topic: { type: String, required: true },
  quiz: { type: [quizSchema], required: true },
});

export const Quiz: Model<QuizEntity> =
  model<QuizEntity>("Quiz", QuizSchema, "Quiz");
