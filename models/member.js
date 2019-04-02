const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    address: {
        type: String,
        required: [true, 'Address is required!']
    },
    zipcode: {
        type: String,
        required: [true, 'Zipcode is required!']
    },
    email: {
        type: String,
        validate: [
            {
                validator: function (input) {
                    let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
                    return regex.test(input);
                },
                message: 'Invalid email format!'
            },
            {
                validator: function (input) {
                    return mongoose.model('Member', memberSchema)
                        .findOne({ _id: { $ne: this._id }, email: input })
                        .then(data => { if (data) return false })
                },
                message: 'Email is already registered!'
            }
        ]
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required!'],
        minlength: [11, 'Minimum phone character is 11!'],
        maxlength: [13, 'Maximum phone character is 13!']
    }
})

let Member = mongoose.model('Member', memberSchema)

module.exports = Member