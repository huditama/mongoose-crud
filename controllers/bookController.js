const Book = require('../models/book')

class bookController {
    static create(req, res) {
        const { isbn, title, author, category, stock } = req.body
        Book
            .create({ isbn, title, author, category, stock })
            .then((createdBook) => { res.status(201).json({ message: 'Successfully created book!', createdBook }) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static findAll(req, res) {
        let search = {}
        if (req.query.search) {
            search = {
                $or: [{
                    title: {
                        $regex: '.*' + req.query.search + '.*',
                        $options: "i"
                    }
                }, {
                    author: {
                        $regex: '.*' + req.query.search + '.*',
                        $options: "i"
                    }
                }]
            }
        } else if (req.query.title) {
            search = {
                title: {
                    $regex: '.*' + req.query.title + '.*',
                    $options: "i"
                }
            }
        } else if (req.query.author) {
            search = {
                author: {
                    $regex: '.*' + req.query.author + '.*',
                    $options: "i"
                }
            }
        }

        Book
            .find(search)
            .then((allBooks) => { res.status(200).json(allBooks) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static findOne(req, res) {
        Book
            .findById(req.params.bookId)
            .then((findOneBook) => { res.status(200).json(findOneBook) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static updatePut(req, res) {
        const { isbn, title, author, category, stock } = req.body
        Book
            .findByIdAndUpdate(req.params.bookId, { $set: { isbn, title, author, category, stock } })
            .then((updatedBook) => { res.status(201).json({ message: 'Successfully updated (PUT) book!', updatedBook }) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static updatePatch(req, res) {
        const { title } = req.body
        Book
            .findByIdAndUpdate(req.params.bookId, { $set: { title } })
            .then((updatedBook) => { res.status(201).json({ message: 'Successfully updated (PATCH) book!', updatedBook }) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static delete(req, res) {
        Book
            .findByIdAndDelete(req.params.bookId)
            .then((deletedBook) => { res.status(200).json({ message: 'Successfully deleted book!', deletedBook }) })
            .catch((err) => { res.status(400).json(err.message) })
    }
}

module.exports = bookController