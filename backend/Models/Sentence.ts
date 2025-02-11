import mongoose, { Model } from "mongoose";

export interface ISentenceEntity {
  title: string;
  content: SentenceDetail[];
}

export interface SentenceDetail {
  heading: string;
  paragraph: string;
}

const sentenceDetailSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  paragraph: { type: String, required: true },
});

const sentenceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: [sentenceDetailSchema], required: true },
});

export const Sentence: Model<ISentenceEntity> = mongoose.model<ISentenceEntity>(
  "Sentence",
  sentenceSchema,
  "Sentence"
);
