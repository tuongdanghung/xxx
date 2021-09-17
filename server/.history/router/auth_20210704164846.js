require('dotenv').config()

const express = require('express')
const routes = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const User = require('../modules/user')

// register
// api/auth/register
routes.post('/register', async (req, res) => {
    const { username, password } = req.body

    // validation
    if (!username || !password)
        return res
            .status(400)
            .json({ success: false, message: 'Missing username and/or password' })

    try {
        const user = await User.findOne({ username })

        if (user)
            return res.status(400).json({ success: false, message: 'tai khoan da ton tai' })

        // 
        const hashPassword = await argon2.hash(password)
        const newUser = new User({
            username,
            password: hashPassword
        })
        await newUser.save()

        // return token
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCSESS_TOKEN)
        res.json({ success: true, message: "ok luon", accessToken: accessToken })
    } catch (error) {

    }
})

module.exports = routes