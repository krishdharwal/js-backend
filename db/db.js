import mongoose from "mongoose";
import dotenv from 'dotenv';
import { Db } from "mongodb";

dotenv.config({
   path: './.env'
})
const DB_NAME = "VideoTubeDB"
const dbConnector = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI,{
        dbName: DB_NAME
       })
    } catch (error) {
        console.log("ERROR in dbConnector : " , error);
    }
}


export default dbConnector;