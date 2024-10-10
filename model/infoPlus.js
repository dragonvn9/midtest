import mongoose from "mongoose";

const infoPlusSchema = mongoose.Schema({
    skills: String,
    hobbies: String,
    goals: String
   
})

const infoPlusModel = mongoose.model("info_plus", infoPlusSchema)
export default infoPlusModel
