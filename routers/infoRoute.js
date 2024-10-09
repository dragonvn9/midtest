import { Router } from "express"
import { createInfo, getInfoById, updateInfoById, deleteInfoById, getAllInfo } from "../controllers/infoController.js";

const router = new Router();

router.post("/create-info", createInfo)
router.get("/:idInfo", getInfoById)
router.get("/", getAllInfo)
router.put("/:idInfo", updateInfoById)
router.delete("/:idInfo", deleteInfoById)


// router.post("/update-post", updatePost)
// router.get("/", (req, res) => {
//     console.log(req.user)
// })
// // router.put("/update")
// // router.delete("/delete")

export default router