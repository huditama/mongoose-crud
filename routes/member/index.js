const express = require('express')
const router = express.Router()

//Controllers
const memberController = require('../../controllers/memberController')

//Member Routes
router.post('/', memberController.create)
router.get('/', memberController.findAll)
router.get('/:memberId', memberController.findOne)
router.put('/:memberId', memberController.updatePut)
router.patch('/:memberId', memberController.updatePatch)
router.delete('/:memberId', memberController.delete)


module.exports = router