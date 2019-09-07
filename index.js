const express = require('express');

const server = express();
server.use(express.json);

const projects = [];

server.get('/projects', (req, res) => res.send({ message: 'Projects' }));

server.post('/projects', (req, res) => {
  const { id, title, tasks } = res.params;

  return res.send({ message: 'Add projects' });
});

server.post('/projects/:id/tasks:', (req, res) =>
  res.send({ message: 'Add tasks' })
);

server.put('/:id', (req, res) => res.send({ message: 'Edit' }));

server.delete('/:id', (req, res) => res.send({ message: 'Delete' }));

server.listen(3000);
