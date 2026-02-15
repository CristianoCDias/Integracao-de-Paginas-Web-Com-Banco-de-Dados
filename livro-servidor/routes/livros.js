const express = require('express');
const router = express.Router();
const { incluir, obterLivros } = require('../modelo/livro-dao');

router.post('/', async (req, res) => {
    console.log("Recebido:", req.body); // debug
    try {
        await incluir(req.body);
        res.json({ mensagem: "Livro incluído com sucesso!" });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao incluir livro" });
    }
});

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

module.exports = router;
