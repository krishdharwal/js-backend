import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express()

app.get('/app',(req,res) => {
    res.send("HELLO");
})

app.get('/kd',(req,res) => {
    res.send("shit fuck man")
})

const port = process.env.PORT || 4000;

app.listen(port,() => {
    console.log(`App running on port = ${port}`)
})