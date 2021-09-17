const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../modules/user')

// @route GET api/auth
// @desc Check if user is logged in
// @access Public

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', async (req, res) => {
    const { username, password } = req.body
    // Simple validation
    if (!username || !password)
        return res
            .status(400)
            .json({ success: false, message: 'Missing username and/or password' })

    try {
        // Check for existing user
        const user = await User.findOne({ username })

        if (user)
            return res
                .status(400)
                .json({ success: false, message: 'Username already taken' })

        // All good
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({ username, password: hashedPassword })
        await newUser.save()

        // Return token
        const accessToken = jwt.sign(
            { userId: newUser._id },
            process.env.ACCESS_TOKEN_SECRET
        )

        res.json({
            success: true,
            message: 'User created successfully',
            accessToken
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
        const passValidate = await argon2.verify(user.password, password)

        if (!passValidate) {
            res.status(400).json({ success: false, message: 'cut' })
        }

    }
})



// post login
// 
router.post('/login', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password)
        return res
            .status(400)
            .json({ success: false, message: 'Missing username and/or password' })
    try {
        const user = await User.findOne({ username })

        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: 'sai roi' })
        }
        res.json({
            success: true,
            message: 'User created successfully',
            accessToken
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
        const passValidate = await argon2.verify(user.password, password)

        if (!passValidate) {
            res.status(400).json({ success: false, message: 'cut' })
        }
    }

})

module.exports = router