const express = require('express');
const categoryRouter = express.Router();

categoryRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will return all categories for current user');
})
.post((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will create new category');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /categories');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DEL operation not supported on /categories');
});

categoryRouter.route('/:categoryId')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will return category with id: ' + req.params.categoryId);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /categories/' + req.params.categoryId);
})
.put((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will update category with id: ' + req.params.categoryId);
})
.delete((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will delete category with id: ' + req.params.categoryId);
});

module.exports = categoryRouter;