const responce = require('../responce')
const db = require('../settings/database')

const bcrypt = require('bcryptjs')

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

    db.query('SELECT `id`, `name`,  `email` FROM `users` WHERE `email` = "'+ req.body.email +'"', (err, rows, fields) => {
        if(err) {
            responce.status(404, err, res)
        }
        else if(typeof rows !== undefined && rows.length > 0){
            const row = JSON.parse(JSON.stringify(rows))
            row.map(rw => {
                responce.status(302, {message: 'Email alredy existed'}, res)
                return true
            })
        }
        else {
            const salt = bcrypt.genSaltSync(10)
            const {email, name, password, secondName} = req.body
            const passwordHash = bcrypt.hashSync(password, salt)
            
            const sql = "INSERT INTO `users`(`name`, `secondName`, `email`, `password`) VALUES('" + name +"','" + secondName +"','" + email +"', '"+ passwordHash +"')"

            db.query(sql, (err, result) => {
                if(err) {
                    responce.status(400, err, res)
                }
                else {
                    responce.status(200, {message: 'Users was created', result}, res)
                }
            })
        }
    })


    
}