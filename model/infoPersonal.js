import mongoose from "mongoose";

const infoSchema = mongoose.Schema({
    userId: String,
    name: String,
    birthday : Date,
    birthPlace: String,
    nationality: String,
    education: String

})

const infoModel = mongoose.model("info_personal", infoSchema)
export default infoModel
