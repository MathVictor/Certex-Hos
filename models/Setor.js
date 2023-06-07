const mongoose = require('mongoose');
const Setor = mongoose.model('Setor', {
    NOME_SETOR: String,
    RESPONSAVEL: String,
    CPF_RESPONSAVEL: Number,
    LOGIN: String,
    SENHA: String,
});

module.exports = Setor;