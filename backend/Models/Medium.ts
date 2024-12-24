import mongoose from "mongoose";

const mediumSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    images: [String],
  },
  { timestamps: true }
);

export const Medium = mongoose.model("medium", mediumSchema);
