const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	id:Number,
    username: String,
    password: String,
    email: String,
    friends:Array
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);