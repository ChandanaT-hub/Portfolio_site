import { Schema,model,models } from "mongoose";

const demoSchema = new Schema({
    name:String,
    email:String,
    question:String
});

const Demo = models.Demo || model("Demo",demoSchema);

export default demoSchema;