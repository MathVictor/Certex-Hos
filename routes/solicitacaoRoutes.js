const router = require('express').Router();
const Solicitacao = require('../models/Solicitacao');

router.post('/', async (req, res) => {
    
    const {
        NOME_SETOR,
        EXTINTOR_TIPO,
        idEXTINTOR,
        DESCRICAO,
        STATUS,
    } = req.body;

    const setor = {
        NOME_SETOR,
        EXTINTOR_TIPO,
        idEXTINTOR,
        DESCRICAO,
        STATUS,
    }
    
    console.log(req.body);

    if (NOME_SETOR || !EXTINTOR_TIPO || !idEXTINTOR || !DESCRICAO || !STATUS) {
        res.status(422).json({error: "Parameter Missing"});
        return;
    }
    try {
        await Setor.create(setor);
        res.status(201).json({ message: 'Solicitação enviada com sucesso' });
        return;

    } catch (err) {
        res.status(500).json({"error": err});
        return;
    }
});

module.exports = router;