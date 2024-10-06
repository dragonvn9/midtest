import mongoose from "mongoose";

const infoPlusSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    hobbies: String,
    goals: String
   
})

const infoPlusModel = mongoose.model("info_plus", infoPlusSchema)
export default postModel
