const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    username: {
        type: String,
        require: [true, "user must have an username"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "user must have a password"],
    },
});

const User = moongose.model("User", userSchema);

module.exports = User;