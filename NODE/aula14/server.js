require('dotenv').config(); // Sempre em primeiro lugar!

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Conexão com o MongoDB
// Usamos a variável de ambiente que você criou no seu arquivo .env
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Conectado à base de dados.');
    app.emit('pronto'); // Emite um sinal quando a conexão for estabelecida
  })
  .catch(e => {
    console.log('ERRO DE CONEXÃO:', e);
  });

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middleware/middleware');

// Middlewares padrão do Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Boa prática adicionar para lidar com JSON
app.use(express.static(path.resolve(__dirname, 'public')));

// Configurações de View
app.set('views', path.resolve(__dirname, 'src', 'views')); 
app.set('view engine', 'ejs');

// Meus próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

// O servidor só começa a escutar após o sinal 'pronto' do MongoDB
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});