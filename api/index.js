import express from 'express'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((err)=>{
    console.log(err)
});

app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)