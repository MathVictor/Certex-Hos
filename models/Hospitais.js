const mongoose = require('mongoose');
const Hospitais = mongoose.model('Hospitais', {
    NOME: String,
    CNPJ: Number,
    ENDERECO: String,
    CONTATO: Number,
});

module.exports = Hospitais;