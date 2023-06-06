const mongoose = require('mongoose');
const Setores = mongoose.model('Setores', {
    NOME_SETOR: String,
    RESPONSAVEL: String,
    CPF_RESPONSAVEL: Number,
    LOGIN: String,
    SENHA: String,
});

module.exports = Setores;