import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express()

app.get('/app',(req,res) => {
    res.send("HELLO");
})

const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`App running on port = ${port}`)
})