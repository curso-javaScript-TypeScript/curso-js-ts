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
// ************* BODY *******************
app.use(
  express.urlencoded(
    { 
      extended: true 
    }
  )
);

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar dados</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios', (req, res) => {
  console.log('PARAMS:', req.params);
  console.log('QUERY', req.query);
  res.send(req.query);
});

app.post('/', (req, res) => {
  console.log(req.body);
  console.log()
  res.send(`Você me enviou o seguinte nome: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

/*
########## exemplos e testes da aula em 2026 ################
**************** PARAMS E QUERY ****************

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

app.get('/testes/:idUsuarios', (req, res) => {
  console.log('PARAMS:', req.params);
  console.log('QUERY', req.query);
  res.send(req.query);
});


app.post('/', (req, res) => {
  res.send('Recebemos o formulário');
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
*/