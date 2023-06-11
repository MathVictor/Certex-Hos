const mongoose = require('mongoose');
const Hospital = mongoose.model('Hospital', {
    NOME: String,
    CNPJ: Number,
    ENDERECO: String,
    CONTATO: Number,
    LOGIN_DIR: String,
    SENHA_DIR: String,
},'hospital');

module.exports = Hospital;