import mongoose from "mongoose";

const workProcessSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    personal_skills: String,
    personal_projects: String,
    task: String,
    duration : Date

})

const workProcesModel = mongoose.model("work_process", workProcessSchema)
export default postModel
