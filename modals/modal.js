const mongoose = require("mongoose");

// db schema 
const userSchema = mongoose.Schema({
    "name": {
        type: String,
        require: true
    },
    "email": {
        type: String,
        require: true,
        unique: true
    },
    "dob": {
        type: String,
        require: true
    },
    "occupation": {
        type: String,
        require: true
    },
    "city": {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

// db model 
const userModel = mongoose.model("users", userSchema);

module.exports.userModel = userModel;