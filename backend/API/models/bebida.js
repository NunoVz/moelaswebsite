const mongoose = require("mongoose");

const bebida = mongoose.Schema({
    nome: { type: String, require: true },
    imagem: { type: String, require: true },
    ingredientes: { type: Array, require: true },
    preco: {type: String, require: true },
});

module.exports = mongoose.model("Bebida", bebida);