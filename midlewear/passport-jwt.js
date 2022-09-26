const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../settings/database')

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'jwt-key'
}

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, (payload, done) => {
            try {
                db.query('SELECT `id`, `email` FROM `users` WHERE `id` = "'+payload.userId+'"', (error, rows, fields) => {
                    const user = rows
                    if(user){
                        done(null, user)
                    }
                    else {
                        done(null, false)
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }))
}