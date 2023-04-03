const express = require('express');
const Todo = require('../models/todo');
const todoRouter = express.Router();

//handles requests for all todos
todoRouter.route('/')
//returns all todos
.get((req, res, next) => {
    Todo.find()
    .then((todos) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todos);
    })
    .catch((err) => next(err));
})
//creates new todo
.post((req, res, next) => {
    Todo.create(req.body)
    .then((todo) => {
        console.log('Todo created', todo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todo);
    })
    .catch((err) => next(err));
})
//PUT operation not supported on /todos
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /todos');
})
//DEL operation not supported on /todos
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DEL operation not supported on /todos');
});

// handles requests for specific todo
todoRouter.route('/:todoId')
// returns specific todo by id
.get((req, res, next) => {
    Todo.findById(req.params.todoId)
    .then(todo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todo);
    })
    .catch((err) => next(err));
})
//POST operation not supported on /todos/
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /todos/' + req.params.todoId);
})
//will update todo by id
.put((req, res, next) => {    
    Todo.findByIdAndUpdate(req.params.todoId, {
        $set: req.body
    }, { new: true })
    .then(todo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todo);
    })
    .catch((err) => next(err));
})
//will delete todo by id
.delete((req, res, next) => {
    Todo.findByIdAndDelete(req.params.todoId)
    .then(todo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todo);
    })
    .catch((err) => next(err));
});

module.exports = todoRouter;