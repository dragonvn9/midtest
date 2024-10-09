import { Router } from "express"
import { createInfo, getInfoById, updateInfoById, deleteInfoById } from "../controllers/infoController.js";

const router = new Router();

router.post("/create-info", createInfo)
router.get("/:idInfo", getInfoById)
router.put("/:idInfo", updateInfoById)
router.delete("/:idInfo", deleteInfoById)


// router.post("/update-post", updatePost)
// router.get("/", (req, res) => {
//     console.log(req.user)
// })
// // router.put("/update")
// // router.delete("/delete")

export default router