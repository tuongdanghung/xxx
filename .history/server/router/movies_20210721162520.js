const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Movies = require('../modules/movies')

// @route GET api/posts
// @desc Get posts
// @access Private
router.get('/', verifyToken, async (req, res) => {
    try {
        const movies = await Movies.find({ user: req.userId }).populate('user', [
            'username'
        ])
        res.json({ success: true, movies })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

// @route POST api/posts
// @desc Create post
// @access Private
router.post('/', verifyToken, async (req, res) => {
    const { title, description, url, status, images } = req.body

    // Simple validation
    if (!title)
        return res
            .status(400)
            .json({ success: false, message: 'Title is required' })

    try {
        const newMovies = new Movies({
            title,
            images,
            description,
            url: url.startsWith('https://') ? url : `https://${url}`,
            status: status,
            user: req.userId
        })

        await newMovies.save()

        res.json({ success: true, message: 'Happy learning!', movie: newMovies })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

// @route PUT api/posts
// @desc Update post
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
    const { title, description, url, status, images } = req.body

    // Simple validation
    if (!title)
        return res
            .status(400)
            .json({ success: false, message: 'Title is required' })

    try {
        let updatedMovie = {
            title,
            description: description || '',
            url: (url.startsWith('https://') ? url : `https://${url}`) || '',
            images,
            status: status || 'TO LEARN'
        }

        const movieUpdateCondition = { _id: req.params.id, user: req.userId }

        updatedMovie = await Movie.findOneAndUpdate(
            movieUpdateCondition,
            updatedMovie,
            { new: true }
        )

        // User not authorised to update post or post not found
        if (!updatedMovie)
            return res.status(401).json({
                success: false,
                message: 'Post not found or user not authorised'
            })

        res.json({
            success: true,
            message: 'Excellent progress!',
            movie: updatedMovie
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

// @route DELETE api/posts
// @desc Delete post
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const movieDeleteCondition = { _id: req.params.id, user: req.userId }
        const deletedMovie = await Movie.findOneAndDelete(movieDeleteCondition)

        // User not authorised or post not found
        if (!deletedMovie)
            return res.status(401).json({
                success: false,
                message: 'Post not found or user not authorised'
            })

        res.json({ success: true, post: deletedMovie })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

module.exports = router