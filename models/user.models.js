// import mongoose to model a data 
// that will going to be stored in db 
import mongoose, { Schema } from "mongoose";

// write the data schema or entity , 
// dont forget to use "new"
const userDefine = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: [true,"password is required"]
    },
    email: {
        type: String,
        required: false,
        index: true
    },
    avatar: {
        type: String
    },
    coverImage: {
        type: String
    },
    // used array to add the videos history 
    // watchHistory: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Videos"
    //     }
    // ],
    refreshToken: {
        type: String
    }
},{timestamps: true})

// then export the model and give the model name 
// that will going to get stored in mongo db in prural form
export const User = mongoose.model("User",userDefine); 