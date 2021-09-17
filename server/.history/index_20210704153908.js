const express = require('express')
const mongoose = require('mongoose')

const authRouter = require('./router/auth')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://hungbang:Hungbang123@test-app.715o2.mongodb.net/test-app?retryWrites=true&w=majority`, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log("mongodb connect success");
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
connectDB()

const app = express()

app.use('/api/auth', authRouter)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`sever started on port ${PORT}`);
})