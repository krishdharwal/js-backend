// iske andhar sare path honge ki kaha par kab jana hai
// Main File for Express
// Routes storage 
import cors from "cors"
import express from "express";
// import cookieParser from "cookie-parser"

const app = express()


// middleWare
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(express.static("public"))
// app.use(cookieParser())


// routes imported
import userRoute from "./user.routes.js"

// routes declaration
app.use("/user",userRoute)

export {app}



