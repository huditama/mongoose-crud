const express = require('express')
const router = express.Router()
const book = require('./book')
const member = require('./member')
const transaction = require('./transaction')


router.use('/books', book)
router.use('/members', member)
router.use('/transactions', transaction)

module.exports = router