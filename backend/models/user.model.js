const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		// This doesn't let me have duplicate users.
		unique: true,
		// This takes out whitespace that the user may have input.
		trim: true,
		minlength: 3
	}
}, {
	timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
