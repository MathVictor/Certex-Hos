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
    
const extintorRoutes    = require('./routes/extintorRoutes');
const hospitalRoutes    = require('./routes/hospitalRoutes');
const setorRoutes       = require('./routes/setorRoutes');
const solicitacaoRoutes = require('./routes/solicitacaoRoutes');

app.use('/extintor',    extintorRoutes);
app.use('/hospital',    hospitalRoutes);
app.use('/setor',       setorRoutes);
app.use('/solicitacao', solicitacaoRoutes);

app.get('/', (req, res) => {
    console.log("logged to server.");
    res.json({ message:"Hello World"})
})