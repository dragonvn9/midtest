import workProcesModel from '../model/workProcess.js'


// tạo mới thông tin work process
const createWorkProcess = async (req, res)=> {
    try {
        const {personal_skills, personal_projects, working_process} = req.body
        if (!personal_skills || !personal_projects || !working_process) {
            return res.status(400).send({ message: "All fields are required" });
        }
        const newWorkProcess = await workProcesModel.create({
            personal_skills : personal_skills,
            personal_projects: personal_projects,
            working_process : working_process

        })
        res.status(200).send({
            newWorkProcess,
            message: "created new work process sucessfully"

        })


    } catch(err){
        return res.status(400).send(err.message)
    }
}
// lấy tất cả thông tin work process
const getAllWorkProcess = async (req, res) =>{
    try{
        const allWorkProcess = await workProcesModel.find()
        if(!allWorkProcess) {
            return res.status(404).send({
                message: "No information available"
            })
        }
        res.status(200).send({
            allWorkProcess,
            message: 'get all infomation work process successfull'
        })

    } catch(err) {
        res.status(500).send(err.message)
    }
}
// chức năng tìm kiếm theo id work process
const getWorkProcessById = async (req, res)=> {
    try{
        const idWorkProcess = req.params.idWorkProcess
        const workProcess = await workProcesModel.findById(idWorkProcess)
        if(!workProcess){
            return res.status(404).send({
                message: "info not found"
            })
        }
        res.status(200).send({
            workProcess,
            message: "search work process successfully"
        })

    } catch(err) {
        res.status(500).send(err.message)
    }

}
// chức năng update theo id
const updateWorkProcessById = async (req, res)=> {
    try {
        const idWorkProcess = req.params.idWorkProcess
        const updateWorkprocess = await workProcesModel.findByIdAndUpdate(idWorkProcess, req.body, {new: true})
        if(!updateWorkprocess){
            return res.status(404).send({
                message: "info not found"
            })
        }
        res.status(200).send({
            updateWorkprocess, 
            message: "Work process information has been updated successfully!"
        })

    }catch(err) {
        res.status(500).send(err.message)
    }
}
// tạo chức năng delete work process by id 
const deleteWorkProcessById = async (req, res)=> {
    try{
        const idWorkProcess = req.params.idWorkProcess
        const deleteWorkProcess = await workProcesModel.findByIdAndDelete(idWorkProcess)
        if(!deleteWorkProcess) {
            return res.status(404).send({
                message: "work process information does not exist"
            })
        }
        res.status(200).send({
            deleteWorkProcess,
            message : "deleted work process infomation successfully"
        })

    }catch(err) {
        res.status(500).send(err.message)
    }
}


export {
    createWorkProcess,
    getAllWorkProcess,
    getWorkProcessById,
    updateWorkProcessById,
    deleteWorkProcessById
}