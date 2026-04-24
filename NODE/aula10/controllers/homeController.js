exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome"><br>
  Sobrenome do cli: <input type="text" name="sobrenome">
  <button>Enviar dados</button>
  </form>
  `);
};


exports.rotaPost = (req, res) => {
  res.send('Criando a rota do POST!');
};