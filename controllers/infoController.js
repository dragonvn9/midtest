import infoModel from '../model/infoPersonal.js'

const createInfo = async (req, res) => {
    try {
        const {name, birthday, birthPlace, nationality, education} = req.body
        //console.log(req.body)

        const { userId } = req.user.id
        console.log(req.user)

        if (!name || !birthday || !birthPlace || !nationality || !education) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const newInfo= await infoModel.create({
            userId: userId,
            name: name,
            birthday: birthday,
            birthPlace: birthPlace,
            nationality: nationality,
            education: education

        })
        
        //console.log(newInfo)
        return res.status(200).send({
            newInfo,
            message: "creat new info personal sucessfully"})
        
    } catch (err) {
        return res.status(400).send(err.message)

    }
}
// Lấy thông tin cá nhân theo user ID
const getInfoById = async (req, res)=> {
    try {
        const idInfo = req.params.userId
        const info = await infoModel.findById(idInfo)
        if(!info){
            return res.status(404).send({message : "info not found"})
        }

        res.status(200).send({
            info,
            message : "search successfull"

        })

    } catch (err){
        res.status(500).send(err.message)

    }
}

export {
    createInfo,
    getInfoById

}