const express = require('express')
const router = express.Router()

//Controllers
const bookController = require('../../controllers/bookController')

//Book Routes
router.post('/', bookController.create)
router.get('/', bookController.findAll)
router.get('/:bookId', bookController.findOne)
router.put('/:bookId', bookController.updatePut)
router.patch('/:bookId', bookController.updatePatch)
router.delete('/:bookId', bookController.delete)


module.exports = router