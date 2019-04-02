const Member = require('../models/member')

class memberController {
    static create(req, res) {
        const { name, address, zipcode, email, phone } = req.body
        Member
            .create({ name, address, zipcode, email, phone })
            .then((createdMember) => { res.status(201).json({ message: 'Successfully created member!', createdMember }) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static findAll(req, res) {
        Member
            .find({})
            .then((allMembers) => { res.status(200).json(allMembers) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static findOne(req, res) {
        Member
            .findById(req.params.memberId)
            .then((findOneMember) => { res.status(200).json(findOneMember) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static updatePut(req, res) {
        const { name, address, zipcode, email, phone } = req.body
        Member
            .findByIdAndUpdate(req.params.memberId, { $set: { name, address, zipcode, email, phone } })
            .then((updatedMember) => { res.status(201).json({ message: 'Successfully updated (PUT) member!', updatedMember }) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static updatePatch(req, res) {
        const { address } = req.body
        Member
            .findByIdAndUpdate(req.params.memberId, { $set: { address } })
            .then((updatedMember) => { res.status(201).json({ message: 'Successfully updated (PATCH) member!', updatedMember }) })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static delete(req, res) {
        Member
            .findByIdAndDelete(req.params.memberId)
            .then((deletedMember) => { res.status(200).json({ message: 'Successfully deleted member!', deletedMember }) })
            .catch((err) => { res.status(400).json(err.message) })
    }
}

module.exports = memberController