import { Model, model, Schema } from "mongoose";

export interface CodingChallengeEntity {
  title: string;
  goal: string;
  steps: CodingChallengeDetail[];
  learnings: CodingChallengeDetail[];
  category: string;
}

interface CodingChallengeDetail {
  title: string;
  paragraph: string;
}

const codingChallengeDetailSchema = new Schema<CodingChallengeDetail>({
  title: { type: String, required: true },
  paragraph: { type: String, required: true },
});

const codingChallengeSchema = new Schema<CodingChallengeEntity>({
  title: { type: String, required: true },
  goal: { type: String, required: true },
  steps: { type: [codingChallengeDetailSchema], required: true },
  learnings: { type: [codingChallengeDetailSchema], required: true },
  category: { type: String, required: true },
});

export const CodingChallenge: Model<CodingChallengeEntity> =
  model<CodingChallengeEntity>(
    "CodingChallenge",
    codingChallengeSchema,
    "CodingChallenge"
  );
