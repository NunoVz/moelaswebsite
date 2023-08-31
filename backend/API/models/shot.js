const mongoose = require("mongoose");

const shot = mongoose.Schema({
    nome: { type: String, require: true },
    imagem: { type: String, require: true },
    ingredientes: { type: Array, require: true },
    preco: {type: String, require: true },
    numeroshot: {type: Number, require: false },
});

module.exports = mongoose.model("Shot", shot);