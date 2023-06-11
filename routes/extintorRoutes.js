const router = require('express').Router();
const Extintor = require('../models/Extintor');

router.post('/submit', async (req, res) => {
    
    const {
        idEXTINTOR,
        TIPO,
        CAPACIDADE,
        PROX_MANUTENCAO,
        ULTIMA_MANUTENCAO,
    } = req.body;

    const extintor = {
        idEXTINTOR,
        TIPO,
        CAPACIDADE,
        PROX_MANUTENCAO,
        ULTIMA_MANUTENCAO,
    }

    if (!idEXTINTOR || !TIPO || !CAPACIDADE || !PROX_MANUTENCAO || !ULTIMA_MANUTENCAO) {
        
        res.status(422).json({error: "Parameter Missing"});
        return;
    }
    try {
        await Extintor.create(extintor);
        res.status(201).json({ message: 'Extintor registrado com sucesso' });
        return;

    } catch (err) {
        res.status(500).json({"error": err});
        return;
    }
});

router.get('/', async (req, res) => {
    const id = req.query.id;

    try {
        const extintor = await Extintor.findOne({ _id: id});
        if (!extintor) {
            res.status(422).json({message: "Extintor não existe!"+id});
            return;
        }
        res.status(200).json(extintor);
        return;
        
    } catch (error) {
        res.status(500).json({"error": error});
        return;
    }
});

router.get('/overview', async (req, res) => {
    try {
        const lista_extintores = await Extintor.find();
        res.status(200).json(lista_extintores);
        return;
    } catch (error) {
        res.status(500).json({"error": error});
        return;
    }

});

module.exports = router;