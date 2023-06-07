const mongoose = require('mongoose');
const Hospital = mongoose.model('Hospital', {
    NOME: String,
    CNPJ: Number,
    ENDERECO: String,
    CONTATO: Number,
});

module.exports = Hospital;