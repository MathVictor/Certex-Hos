const mongoose = require('mongoose');
const Solicitacoes = mongoose.model('Solicitacoes', {
    NOME_SETOR: String,
    EXTINTOR_TIPO: String,
    idEXTINTOR: String,
    DESCRICAO: String,
    STATUS: Number,
});

module.exports = Solicitacoes;