const {Router} = require ('express')
const router = Router()

const {getTasks,saveTask,updateTask,deleteTask} = require('./../controllers/taskController')

router.get('/', getTasks)
router.post('/save', saveTask)
router.put('/update/:id', updateTask)
router.delete('/delete/:id', deleteTask)

module.exports = router