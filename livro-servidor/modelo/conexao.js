const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/livraria')
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro MongoDB:', err));

module.exports = mongoose;
