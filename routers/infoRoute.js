import { Router } from "express"
import { createInfo, getInfoById, updateInfoById} from "../controllers/infoController.js";

const router = new Router();

router.post("/create-info", createInfo)
router.get("/:idInfo", getInfoById)
router.put("/:idInfo", updateInfoById)


// router.post("/update-post", updatePost)
// router.get("/", (req, res) => {
//     console.log(req.user)
// })
// // router.put("/update")
// // router.delete("/delete")

export default router