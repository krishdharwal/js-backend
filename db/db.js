import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({
   path: './.env'
})
const DB_NAME = "VideoTubeDB"
const dbConnector = async () => {
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log("db")
    } catch (error) {
        console.log("ERROR in dbConnector : " , error);
    }
}


export default dbConnector;