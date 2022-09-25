
module.exports = (app) => {
    const usersController = require('../Controllers/UsersController')

    app.route('/api/users').get(usersController.getAllUsers)
    app.route('/users/auth/signup').post(usersController.signup)

}