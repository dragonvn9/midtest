import { Router } from "express"
import { createInfo, getInfoById} from "../controllers/infoController.js";

const router = new Router();

router.post("/create-info", createInfo)
router.get("/info/:userId", getInfoById)

// router.post("/update-post", updatePost)
// router.get("/", (req, res) => {
//     console.log(req.user)
// })
// // router.put("/update")
// // router.delete("/delete")

export default router