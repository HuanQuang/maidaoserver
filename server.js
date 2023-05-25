import express from "express";
import cors from 'cors';
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import order from './Router/router.js'
dotenv.config()
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
const port = process.env['PORT'] || 8000
app.use(cors())
app.use(express.json())
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.snqpcmm.mongodb.net/?retryWrites=true&w=majority`
app.use('/api/order',order)
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    console.log('MongoDB connection established...')
    app.listen(port)
})
.catch(err => {
    console.log(err)
})