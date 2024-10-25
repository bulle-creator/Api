const mongoose = require('mongoose');

const EpreuveSchema = mongoose.Schema(
    {
        nom: {
            type:String,
            required: [true, "Entre votre nom"],
        },

        description: {
            type:String,
            required: [true, "Entre votre prenom"],
        },
        image: {
            type:String,
            required: true,
        },
    },
{
    timestamps: true
});

const Epreuve = mongoose.model("Epreuve", EpreuveSchema);

module.exports = Epreuve;