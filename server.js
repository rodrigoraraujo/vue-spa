const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const devServer = require('./build/dev-server');

const port = process.env.PORT || 3000;

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
})();

app.use('/dist', express.static(path.resolve(__dirname, './dist')));

devServer(app);

app.get('*', (req, res) => {
  res.write(indexHTML);
  res.end();
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
