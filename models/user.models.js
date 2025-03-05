// import mongoose to model a data 
// that will going to be stored in db 
import mongoose from "mongoose";

// write the data schema or entity
const userDefine = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    }
},{timestamps: true})

// then export the model and give the model name 
// that will going to get stored in mongo db in prural form
export const User = mongoose.model("User",userDefine); 