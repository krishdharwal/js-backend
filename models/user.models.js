// import mongoose to model a data 
// that will going to be stored in db 
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


// write the data schema or entity , 
// dont forget to use "new"
const userDefine = new mongoose.Schema({
    username: {
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

userDefine.methods.paswordCheck = async function(password){
    return await bcrypt.compare(password,this.password);
}

// access token
// userDefine.methods.generateAccessToken = function(){
//     return jwt.sign(
//         {
//             _id: this._id,
//             email: this.email,
//             username: this.username,
//             fullName: this.fullName
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         {
//             expiresIn: process.env.ACCESS_TOKEN_EXPIRY
//         }
//     )
// }

// refresh token
// userDefine.methods.generateRefreshToken = function(){
//     return jwt.sign(
//         {
//             _id: this._id,
            
//         },
//         process.env.REFRESH_TOKEN_SECRET,
//         {
//             expiresIn: process.env.REFRESH_TOKEN_EXPIRY
//         }
//     )
// }



// then export the model and give the model name 
// that will going to get stored in mongo db in prural form
export const User = mongoose.model("User",userDefine); 