
exports.status = (status, value, res) => {
    const data = {
        status: status,
        value
    }

    res.status(data.status)
    res.json(data)
    res.end()
}