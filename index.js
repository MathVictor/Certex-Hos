const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

require('dotenv').config()

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongo Connected");
        app.listen(8000, () => (
            console.log("Server started on port 8000")
        ));
    })
    .catch((err) => console.log(err));
    
const extintoresRoutes   = require('./routes/extintorRoutes');
const HospitaisRoutes    = require('./routes/hospitalRoutes');
const SetoresRoutes      = require('./routes/setorRoutes');
const SolicitacoesRoutes = require('./routes/solicitacaoRoutes');

app.use('/extintores',   extintoresRoutes);
app.use('/hospitais',    extintoresRoutes);
app.use('/setores',      extintoresRoutes);
app.use('/solicitacoes', extintoresRoutes);

app.get('/', (req, res) => {
    console.log("logged to server.");
    res.json({ message:"Hello World"})
})