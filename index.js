const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config()

const Hospitais = require('./models/Hospitais');
const Extintores = require('./models/Extintores');
const Setores = require('./models/Setores');
const Solicitacoes = require('./models/Solicitacoes');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

app.post('/extintores', async (req, res) => {
    const {
        idEXTINTOR,
        TIPO,CAPACIDADE,
        PROX_MANUTENCAO,
        ULTIMA_MANUTENCAO,
    } = req.body;

    try {
        await Extintores.create(extintores);
        res.status(201).json(message: 'extintor registrada com sucesso');

    } catch (error) {
        res.status(500).json({error: error});
    }

});

app.listen(8000, () => (
    console.log("Server started on port 8000")
));

app.get('/', (req, res) => {
    console.log("ENTROU AQUI");
    res.json({ message:"Hello World"})
})