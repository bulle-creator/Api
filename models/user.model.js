const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        nom: {
            type:String,
            required: [true, "Entre votre nom"],
        },
        prenom: {
            type:String,
            required: [true, "Entre votre prenom"],
        },
        
        login: {
            type:String,
            required: [true, "Entre votre pseudo"],
        },
        role: {
            type:String,
            required:true,
        },
        password: {
            type:String,
            required: [true, "Entre votre mot de passe"],
        },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;