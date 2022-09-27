const { session } = require('passport')

module.exports = (app) => {
    const usersController = require('../Controllers/UsersController')
    const passport = require('passport')

    //Routes 
    app
        .route('/api/users')
        .get(passport.authenticate('jwt', {session: false}), usersController.getAllUsers)

    app
        .route('/users/auth/signup')
        .post(usersController.signup)

    app
        .route('/users/auth/signin')
        .post(usersController.signin)
}