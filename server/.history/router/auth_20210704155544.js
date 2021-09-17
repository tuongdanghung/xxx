const express = require('express')
const routes = express.Router()

const User = require('../modules/user')

// register
// api/auth/register
routes.post('/register', async (req, res) => {
    const { userName, password } = req.body

    // validation
    if (!userName || !password) {
        return res.status(400).json({ success: false, message: 'chua dien username hoac password' });
    }

    try {
        const user = await User.findOne({ username })


    } catch (error) {

    }
})

module.exports = routes