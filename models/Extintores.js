const mongoose = require('mongoose');
const Extintores = mongoose.model('Extintores', {
    idEXTINTOR: String,
    TIPO: String,
    CAPACIDADE: Number,
    PROX_MANUTENCAO: Date,
    ULTIMA_MANUTENCAO: Date,
});

module.exports = Extintores;