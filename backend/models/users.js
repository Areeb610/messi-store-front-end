const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    role: String,
    }, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;

