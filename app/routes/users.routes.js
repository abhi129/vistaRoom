module.exports = (app) => {
    const users = require('../controllers/users.controller.js');

    // Create a new user
    app.post('/users', users.create);

    // Retrieve all users
    app.get('/users', users.findAll);

    // Retrieve a single user with userId
    app.get('/users/:userId', users.findOne);

    // Update a user with userId
    app.put('/users/:userId', users.update);

    // Delete a User with userId
    app.delete('/user/:userId', users.delete);

    // Send the friend request
    app.put('/user/friend/:userId', users.sendFriendRequest);
}