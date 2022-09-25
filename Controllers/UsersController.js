const responce = require('../responce')
const db = require('../settings/database')

exports.getAllUsers = (req, res) => {

    db.query('SELECT `id`, `name`, `secondName`, `email` FROM users', (err, rows, firlds) => {
        if(err){
            responce.status(400, err, res)
        }
        else {
            responce.status(200, rows, res)
        }
    })
}

exports.signup = (req, res) => {
    const sql = "INSERT INTO `users`(`name`, `secondName`, `email`) VALUES('" + req.query.name +"','" + req.query.secondName +"','" + req.query.email +"')"

    db.query(sql, (err, result) => {
        if(err) {
            responce.status(400, err, res)
        }
        else {
            responce.status(200, result, res)
        }
    })
}