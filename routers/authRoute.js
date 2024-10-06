import { Router } from "express";
import {register, login, logout} from '../controllers/authcontroller.js'

const router = new Router()

router.post("/signup", register)

router.post("/login", login)
router.post("/logout", logout)

export default router