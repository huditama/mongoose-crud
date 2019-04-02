const Transaction = require('../models/transaction')

class transactionController {
    static create(req, res) {
        const { member, in_date, out_date, due_date, fine, booklist } = req.body
        Transaction
            .create({ member, in_date, out_date, due_date, fine, booklist })
            .then((createdTransaction) => { res.status(201).json({ message: 'Successfully created transaction!', createdTransaction }) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static findAll(req, res) {
        Transaction
            .find({})
            .populate('member')
            .populate('booklist')
            .then((allTransactions) => {
                if (!req.query.bookId) res.status(200).json(allTransactions)
                else {
                    let queryData = []
                    allTransactions.forEach((transaction) => {
                        transaction.booklist.forEach((book) => {
                            if (req.query.bookId == book._id) queryData.push(transaction)
                        })
                    })
                    res.status(200).json(queryData)
                }
            })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static findOne(req, res) {
        Transaction
            .findById(req.params.transactionId)
            .populate('member')
            .populate('booklist')
            .then((findOneTransaction) => { res.status(200).json(findOneTransaction) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static updatePut(req, res) {
        const { member, in_date, out_date, due_date, fine, booklist } = req.body
        Transaction
            .findOneAndUpdate({ _id: req.params.transactionId }, { $set: { member, in_date, out_date, due_date, fine, booklist } })
            .then((updatedTransaction) => { res.status(201).json({ message: 'Successfully updated (PUT) transaction!', updatedTransaction }) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static updatePatch(req, res) {
        const { in_date } = req.body
        Transaction
            .findOneAndUpdate({ _id: req.params.transactionId }, { $set: { in_date } })
            .then((updatedTransaction) => { res.status(201).json({ message: 'Successfully updated (PATCH) transaction!', updatedTransaction }) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static delete(req, res) {
        Transaction
            .findByIdAndDelete(req.params.transactionId)
            .then((deletedTransaction) => { res.status(200).json({ message: 'Successfully deleted transaction!', deletedTransaction }) })
            .catch((err) => { res.status(400).json(err.message) })
    }
}

module.exports = transactionController