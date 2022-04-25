const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
       type: String,
       required: [true, 'Please enter your email']
   },
    username: {
        type: String,
        required: [true, 'Please enter your username']
    }, 
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)