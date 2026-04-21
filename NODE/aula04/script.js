const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDirectory) {
  rootDirectory = rootDirectory || path.resolve(__dirname);
  const files = await fs.readdir(rootDirectory);
  walk(files, rootDirectory);
}

async function walk(files, rootDirectory) {
  for(let file of files) {
    const fileFullPath = path.resolve(rootDirectory, file);
    const stats = await fs.stat(fileFullPath);

    if(/\.git/g.test(fileFullPath)) continue;
    if(/node_modules/g.test(fileFullPath)) continue;

    if(stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    if(!/\.html$/g.test(fileFullPath)) continue;
    console.log(fileFullPath);
  }
}
readdir('C:\\Dev\\udemy-web-fullstack\\curso-js-ts\\SEÇÕES1ao9');




/*
######### exemplos e testes ##########

const fs = require('fs').promises;
const path = require('path');

fs.readdir(path.resolve(__dirname))
  .then(files => console.log(files))
  .catch(e => console.log(e));

*/