import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({
   path: './.env'
})

const dbConnector = async () => {
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${"userdb"}`)
       console.log("db")
    } catch (error) {
        console.log("ERROR in dbConnector : " , error);
    }
}


export default dbConnector;