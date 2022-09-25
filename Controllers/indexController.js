
const responce = require('../responce')
exports.index = (req, res) => {
    responce.status("hello from api", res)
}