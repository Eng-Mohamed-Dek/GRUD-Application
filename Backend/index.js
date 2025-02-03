import express from 'express'
import mongoose from 'mongoose'
import studentRoutes from './routes/studentRoutes.js'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// express 
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes 
app.use('/', studentRoutes)

app.get('/api', (req, res) => res.send('Route found! Alx'));

let port = process.env.PORT || 3000;

// connect to the database through mongoose 
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen port 
        app.listen(port, () => {
            console.log("Server is working and db connected")
        })
    })
    .catch((error) => console.log(error.message))

