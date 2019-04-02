const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    isbn: {
        type: String,
        required: [true, 'ISBN is required!']
    },
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    author: {
        type: String,
        required: [true, 'Author is required!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!']
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required!'],
        min: [0, 'Stock cannot be negative!'],
    }
})

let Book = mongoose.model('Book', bookSchema)

module.exports = Book