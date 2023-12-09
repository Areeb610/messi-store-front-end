const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },

});


UserSchema.methods.comparePassword = function (password) {
    const user = this;
    return password === user.password;
}
const User = mongoose.model('User', UserSchema);

module.exports = User;

