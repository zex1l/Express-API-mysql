const responce = require('../responce')
const db = require('../settings/database')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { response } = require('express')

exports.getAllUsers = (req, res) => {

    db.query('SELECT `id`, `name`,  `email` FROM users', (err, rows, fields) => {
        if(err){
            responce.status(400, err, res)
        }
        else {
            responce.status(200, rows, res)
        }
    })
}


exports.signup = (req, res) => {

    db.query('SELECT `id`, `name`,  `email` FROM `users` WHERE `email` = "'+ req.body.data.email +'"', (err, rows, fields) => {
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
            const {email, name, password, secondName} = req.body.data
            const passwordHash = bcrypt.hashSync(password, salt)
            
            const sql = "INSERT INTO `users`(`name`, `secondName`, `email`, `password`) VALUES('" + name +"','" + secondName +"','" + email +"', '"+ passwordHash +"')"

            db.query(sql, (err, result) => {
                if(err) {
                    responce.status(400, err, res)
                }
                else {
                    responce.status(200, {message: 'User was created', result}, res)
                }
            })
        }
    })
    
}

exports.signin = (req, res) => {
    // Select data from db
    db.query('SELECT `email`, `id`, `password`, `name`, `friendsId` FROM `users` WHERE `email` = "'+ req.body.data.email +'"', (err, rows, fields) => {
        console.log(req.body.data)
        console.log(rows)
        if(err) {
            responce.status(404, err, res)
        }
        else if(rows.length <= 0) {
            responce.status(401, {message: 'Email not found'}, res)
        }
        else {
            const row = JSON.parse(JSON.stringify(rows))
            row.map(rw => {
                const password = bcrypt.compareSync(req.body.data.password, rw.password)
                if(password){
                    const token = jwt.sign({
                        userId: rw.id,
                        email: rw.email,
                        name: rw.name,
                        userFriends: rw.friendsId
                    },'jwt-key' ,{expiresIn: 120 * 120}) // expriseIn its how many time token is live
                    responce.status(200, {token: `Bearer ${token}`}, res)
                }
                else {
                    responce.status(401, {message: 'Uncorrect email or password'}, res)
                }
                return true
            })
        }
    })
}