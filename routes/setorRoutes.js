const router = require('express').Router();
const Setor = require('../models/Setor');

router.post('/submit', async (req, res) => {
    
    const {
        NOME_SETOR,
        RESPONSAVEL,
        CPF_RESPONSAVEL,
        LOGIN,
        SENHA,
    } = req.body;

    const setor = {
        NOME_SETOR,
        RESPONSAVEL,
        CPF_RESPONSAVEL,
        LOGIN,
        SENHA,
    }

    if (NOME_SETOR || !RESPONSAVEL || !CPF_RESPONSAVEL || !LOGIN || !SENHA) {
        res.status(422).json({error: "Parameter Missing"});
        return;
    }
    try {
        await Setor.create(setor);
        res.status(201).json({ message: 'Setor registrado com sucesso' });
        return;

    } catch (err) {
        res.status(500).json({"error": err});
        return;
    }
});

module.exports = router;