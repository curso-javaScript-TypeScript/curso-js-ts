exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo: 'Estudando JS na aula 16',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
  return;
};

exports.rotaPost = (req, res) => {
  res.send(req.body);
  return;
};


/* ######### testes e exemplos do código na aula 16 #########

  titulo: 'Estudando <span style="color:blue;">E>JS na aula 16',
  numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  titulo: 'Estudando JS na aula 16',


****************************************************
  

<%# ######### testes e exemplos do arquivo .ejs #########

  <%#= titulo %>
  <%#- titulo %>

  <%# if(typeof titulo !== 'undefined') { %> <%#= titulo %>
    <%# } else { %>
      O titulo não foi envidado.
    <%# } %>

**************************************************************

    <% numeros.forEach(num => { %>
      <%= num %>
      <br><br>
    <% }); %>
*/
