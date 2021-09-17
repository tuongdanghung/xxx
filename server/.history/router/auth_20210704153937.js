const express = require('express')
const routes = express.Routes()

const User = require('../modules/user')

routes.get('/', (req, res) => {
    (res.send('abc'))
})

module.exports = routes