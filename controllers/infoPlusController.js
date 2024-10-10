import infoPlusModel from '../model/infoPlus.js'

// Tạo thông tin thêm mới
const createInfoPlus = async (req, res) => {
    try {
        const { skills, hobbies, goals } = req.body;

        if (!skills || !hobbies || !goals) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const newInfoPlus = await infoPlusModel.create({
            skills: skills,
            hobbies: hobbies,
            goals: goals
        });
        
        return res.status(200).send({
            newInfoPlus,
            message: "Create new info plus successfully"
        });
        
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

// Lấy tất cả thông tin thêm
const getAllInfoPlus = async (req, res) => {
    try {
        const allInfoPlus = await infoPlusModel.find();
        if (!allInfoPlus) {
            return res.status(404).send({
                message: "No information available"
            });
        }
        res.status(200).send({
            allInfoPlus,
            message: "Get all info plus successfully"
        });
        
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Lấy thông tin thêm theo ID
const getInfoPlusById = async (req, res) => {
    try {
        const idInfoPlus = req.params.idInfoPlus;
        const infoPlus = await infoPlusModel.findById(idInfoPlus);
        if (!infoPlus) {
            return res.status(404).send({ message: "Info not found" });
        }

        res.status(200).send({
            infoPlus,
            message: "Search successfully"
        });

    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Cập nhật thông tin thêm qua ID
const updateInfoPlusById = async (req, res) => {
    try {
        const idInfoPlus = req.params.idInfoPlus;
        const updateInfoPlus = await infoPlusModel.findByIdAndUpdate(idInfoPlus, req.body, { new: true });
    
        if (!updateInfoPlus) {
            return res.status(404).send({
                message: "Info does not exist"
            });
        }
        res.status(200).send({
            updateInfoPlus,
            message: "Info plus has been updated successfully!"
        });

    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Xóa thông tin thêm theo ID
const deleteInfoPlusById = async (req, res) => {
    try {
        const idInfoPlus = req.params.idInfoPlus;
        const deleteInfoPlus = await infoPlusModel.findByIdAndDelete(idInfoPlus);
        if (!deleteInfoPlus) {
            return res.status(404).send({
                message: "Info does not exist"
            });
        }
        res.status(200).send({
            deleteInfoPlus,
            message: "Deleted info plus successfully"
        });

    } catch (err) {
        res.status(500).send(err.message);
    }
};

export {
    createInfoPlus,
    getInfoPlusById,
    updateInfoPlusById,
    deleteInfoPlusById,
    getAllInfoPlus
};
