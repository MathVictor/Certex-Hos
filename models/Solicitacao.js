const mongoose = require('mongoose');
const Solicitacao = mongoose.model('Solicitacao', {
    NOME_SETOR: String,
    EXTINTOR_TIPO: String,
    idEXTINTOR: String,
    DESCRICAO: String,
    STATUS: Number,
});

module.exports = Solicitacao;