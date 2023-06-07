const mongoose = require('mongoose');
const Extintor = mongoose.model('Extintor', {
    idEXTINTOR: String,
    TIPO: String,
    CAPACIDADE: Number,
    PROX_MANUTENCAO: Date,
    ULTIMA_MANUTENCAO: Date,
},'extintor');

module.exports = Extintor;