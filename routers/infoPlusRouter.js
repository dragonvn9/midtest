import {Router} from 'express'
import { createInfoPlus,
    getInfoPlusById,
    updateInfoPlusById,
    deleteInfoPlusById,
    getAllInfoPlus} from '../controllers/infoPlusController.js'

const router = new Router()

router.post('/create-info-plus', createInfoPlus)
router.get('/', getAllInfoPlus )
router.get('/:idInfoPlus', getInfoPlusById)
router.put('/:idInfoPlus', updateInfoPlusById)
router.delete('/:idInfoPlus', deleteInfoPlusById)



export default router
