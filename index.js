const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.send({message: 'Main' })
});

server.listen(3000);