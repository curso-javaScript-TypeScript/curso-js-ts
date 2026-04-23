/*1. req.params (Parâmetros de Rota)
  Ex: http://instagram.com/profiles/12345
  Usado para identificar um recurso específico. O Express lê ":id" na rota e te entrega "12345".
  No código: app.get('/profiles/:id', ...)

  2. req.query (Query Strings)
  Ex: http://instagram.com/profiles/123?campanha=gemini&cupom=gratis
  Usado para filtros, buscas ou marketing. Tudo que vem após a "?" e é separado por "&".
  No código: req.query.campanha (seria "gemini")

  3. req.body (Corpo da Requisição)
  Ex: { "nome": "Magno", "id": "12345" } enviado via formulário POST.
  Os dados NÃO aparecem na URL. Eles viajam "dentro" do pacote da requisição.
  Usado para criar ou editar dados (senhas, nomes, cadastros).
  No código: req.body.nome.   */


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar dados</button>
  </form>
  `);
});

app.get('/testes', (req, res) => {
  console.log(req.params);
  res.send('Parâmetros para testes');
});

app.post('/', (req, res) => {
  res.send('Recebemos o formulário');
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});