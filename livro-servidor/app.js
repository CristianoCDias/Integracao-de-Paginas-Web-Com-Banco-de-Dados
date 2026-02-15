const express = require('express');
const cors = require('cors');
const livroRouter = require('./routes/livros');

const app = express();

app.use(cors());
app.use(express.json()); // 🔹 obrigatório para JSON POST
app.use('/livros', livroRouter);

// 404 para APIs
app.use((req, res) => res.status(404).json({ erro: 'Rota não encontrada' }));

module.exports = app;
