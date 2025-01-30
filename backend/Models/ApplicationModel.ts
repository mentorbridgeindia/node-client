import mongoose from "mongoose";

const variableSchema = new mongoose.Schema({
  name:String,
  type:String,
  isNullable:Boolean,
  defaultValue:String,
})

const modelSchema = new mongoose.Schema(
  {
    modelName: {type:String,required:true},
    variable:[variableSchema],
    class:String,
  },
);

export const Model = mongoose.model("Model", modelSchema);
