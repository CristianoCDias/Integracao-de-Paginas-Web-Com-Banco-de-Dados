const Livro = require('./livro-schema');

const obterLivros = async () => await Livro.find();
const incluir = async (livro) => await Livro.create(livro);
const excluir = async (id) => await Livro.deleteOne({ _id: id });

module.exports = { obterLivros, incluir, excluir };
