// ikse andhar sare functions honge
import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";

const registerUser = asyncHandler( async (req, res) => {
    const {name , password  } = req.body;

    // if(!name || !password){
    //     return res.status(400).json(new ApiResponse(400, null, "Name and password are required"));
    // }
     
    // create the user
    const createdUser = await User.create({
        name,
        password
    })

    return res.status(200).json(
        new ApiResponse(200,createdUser,"user Created Successfully")
    )
})

export {registerUser}