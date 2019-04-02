const express = require('express')
const router = express.Router()

//Controllers
const transactionController = require('../../controllers/transactionController')

//Member Routes
router.post('/', transactionController.create)
router.get('/', transactionController.findAll)
router.get('/:transactionId', transactionController.findOne)
router.put('/:transactionId', transactionController.updatePut)
router.patch('/:transactionId', transactionController.updatePatch)
router.delete('/:transactionId', transactionController.delete)


module.exports = router