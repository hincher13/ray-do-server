const express = require('express');
const todoRouter = express.Router();

todoRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will return all todos for current user');
})
.post((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will create new todo');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /todos');
})
.delete((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will delete all todos');
});

module.exports = todoRouter;