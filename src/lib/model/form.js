import mongoose from "mongoose";

const formModel = new mongoose.Schema({
    name:String,
    email:String,
    question:String
});
export const form = mongoose.models.forms  || mongoose.model("forms",formModel);