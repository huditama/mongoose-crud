const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    member: {
        type: Schema.Types.ObjectId,
        ref: 'Member',
        required: [true, 'Member is required!']
    },
    in_date: {
        type: Date,
        default: null
    },
    out_date: {
        type: Date,
        required: [true, 'Date of borrowed is required!']
    },
    due_date: {
        type: Date,
        required: [true, 'Due date is required!']
    },
    fine: {
        type: Number,
        default: 0
    },
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: [true, 'Book data is required!']
    }]
})

transactionSchema.post('findOneAndUpdate', function (doc) {
    let outstandingDays = Math.floor((Date.UTC(doc.in_date.getFullYear(), doc.in_date.getMonth(), doc.in_date.getDate()) - Date.UTC(doc.due_date.getFullYear(), doc.due_date.getMonth(), doc.due_date.getDate())) / (1000 * 60 * 60 * 24))
    if (outstandingDays > 0) doc.fine += 1000 * Math.abs(outstandingDays)
    doc.save()
})

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction