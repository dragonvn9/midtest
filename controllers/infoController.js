import infoModel from '../model/infoPersonal.js'

const createInfo = async (req, res) => {
    try {
        const {name, birthday, birthPlace, nationality, education} = req.body
        //console.log(req.body)

        if (!name || !birthday || !birthPlace || !nationality || !education) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const newInfo= await infoModel.create({
            name: name,
            birthday: birthday,
            birthPlace: birthPlace,
            nationality: nationality,
            education: education

        })
        
        return res.status(200).send({
            newInfo,
            message: "create new info personal sucessfully"})
        
    } catch (err) {
        return res.status(400).send(err.message)

    }
}
// lấy tất cả thông tin cá nhân
const getAllInfo = async (req, res) =>{
    try{
        const allInfo = await infoModel.find()
        if(!allInfo) {
            return res.status(404).send({
                message: "No information available"
            })
        }
        res.status(200).send({
            allInfo,
            message: "get all infomation personal successfull"
        })

    } catch(err){
        res.status(500).send(err.message)
    }

}
// Lấy thông tin cá nhân theo id personal
const getInfoById = async (req, res)=> {
    try {
        const idInfo = req.params.idInfo
        const info = await infoModel.findById(idInfo)
        if(!info){
            return res.status(404).send({message : "info not found"})
        }

        res.status(200).send({
            info,
            message : "search successfully"

        })

    } catch (err){
        res.status(500).send(err.message)

    }
}
// cập nhật thông tin qua id info personal
const updateInfoById = async (req, res) =>{
    try {
        const idInfo = req.params.idInfo
        const updateInfo = await infoModel.findByIdAndUpdate(idInfo, req.body, {new: true})
    
        if(!updateInfo){
            return res.status(404).send({
                message: "Personal information does not exist"
            })
        }
        res.status(200).send({
            updateInfo,
            message: "Personal information has been updated successfully!"
        })

    } catch(err){
        res.status(500).send(err.message)
    }
}
// xoá thông tin cá nhân theo id 
const deleteInfoById = async (req, res) => {
    try{
        const idInfo = req.params.idInfo
        const deleteInfo = await infoModel.findByIdAndDelete(idInfo)
        if(!deleteInfo) {
            return res.status(404).send({
                message: "Personal information does not exist"
            })
        }
        res.status(200).send({
            deleteInfo,
            message: "deleted infomation personal successfully"
    
        })

    } catch(err) {
        res.status(500).send(err.message)
    }

}

export {
    createInfo,
    getInfoById,
    updateInfoById,
    deleteInfoById,
    getAllInfo

}