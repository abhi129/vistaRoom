const mongoose = require('mongoose');

const FriendRequestSchema = mongoose.Schema({
	requester: Number
	recipient: Number
	status:Number,
}, {
    timestamps: true
});


module.exports = mongoose.model('Friend', FriendRequestSchema);