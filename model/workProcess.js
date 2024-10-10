import mongoose from "mongoose";

const workProcessSchema = mongoose.Schema({
    personal_skills: String,
    personal_projects: {
        project_name: String,
        role : String,
        start_time : Date,
        end_time: Date
    },
    working_process: {
        company_name: String,
        role: String,
        start_time : Date,
        end_time: Date,
    }
})

const workProcesModel = mongoose.model("work_process", workProcessSchema)
export default workProcesModel
