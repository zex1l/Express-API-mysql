const mysql = require('mysql')

const connection = mysql.createConnection({
    port: 'localhost',
    port: 3200,
    user: 'root',
    password: '',
    database: 'rest'
})

connection.connect(err => {
    if(err){
        return console.log("Error connection")
    }
    else {
        return console.log("Connection succes")
    }
})

module.exports = connection