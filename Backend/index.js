const express = require('express')
const connectDB = require('./src/Database/db')

require('dotenv').config({
    path:'./src/config/.env'
})

const app = express()
const port = process.env.PORT
const url = process.env.url

app.listen(port,async()=>{
    try{
        await connectDB(url)
        console.log(`server is running on port${port}`)
    }catch{

    }
})