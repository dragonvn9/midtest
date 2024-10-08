import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    infoPersonalId : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "infoModel"
    },
    workProcessId: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'workProcesModel' 
    },
    infoPlusId: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'infoPlusModel' }
})

const userModel = mongoose.model("users", userSchema)
export default userModel