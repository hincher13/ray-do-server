const express = require('express');
const usersRouter = express.Router();

//will handle requests to /users
usersRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will return all users');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /users');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /users');
});

//will handle requests to /signup
usersRouter.route('/signup')
.get((req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation not supported on /users/signup');
})
.post((req, res) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will signup new user');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users/signup');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /users/signup');
});

//will handle requests to /login
usersRouter.route('/login')
.get((req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation not supported on /users/login');
})
.post((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will login user and return token');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users/login');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /users/login');
});

//will handle requests to /logout
usersRouter.route('/logout')
.get((req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation not supported on /users/logout');
})
.post((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will logout user, destroy session, and return success message');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users/logout');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /users/logout');
});

//will handle requests to /:userId
usersRouter.route('/:userId')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will return single user with id');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /users/:userId');
})
.put((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will update single user with id');
})
.delete((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will delete single user with id');
});

//will handle requests to /:userId/preferences
usersRouter.route('/:userId/preferences')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will return preferences for single user with id');
})
.post((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will create preferences for single user with id');
})
.put((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will update preferences for single user with id');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /users/:userId/preferences');
});

//will handle requests to /:userId/notifications
usersRouter.route('/:userId/notifications')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will return notifications for single user with id');
})
.post((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will create notification settings for single user with id');
})
.put((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will update notification settings for single user with id');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /users/:userId/notifications');
});

module.exports = usersRouter;
