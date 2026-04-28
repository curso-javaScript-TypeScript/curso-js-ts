exports.middlewareGlobal = (req, res, next) => {
  res.locals.VariavelLocal = 'Aqui é atribuido o valor da váriável local.';
  next();
};

