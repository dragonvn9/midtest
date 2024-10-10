import {Router} from 'express'
import {createWorkProcess, getAllWorkProcess, getWorkProcessById, updateWorkProcessById, deleteWorkProcessById} from '../controllers/workProcessController.js'

const router = new Router()

router.post('/create-work-process', createWorkProcess)
router.get('/', getAllWorkProcess )
router.get('/:idWorkProcess', getWorkProcessById)
router.put('/:idWorkProcess', updateWorkProcessById)
router.delete('/:idWorkProcess', deleteWorkProcessById)



export default router
