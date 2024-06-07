const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: [],
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
})
const UserSchema = mongoose.model("user", userSchema)
module.exports = UserSchema