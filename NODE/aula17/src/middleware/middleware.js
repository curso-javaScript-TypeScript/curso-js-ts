exports.middlewareGlobal = (req, res, next) => {
  res.locals.VariavelLocal = 'Aqui é atribuido o valor da váriável local.';
  next();
};

exports.testandoMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err && 'EBADCSRFTOKEN' === err.code) {
    return res.render('404'); 
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}
