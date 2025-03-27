// ikse andhar sare functions honge
import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import { cloudinaryUploader } from "../utils/cloudinary.utils.js";

const registerUser = asyncHandler( async (req, res) => {
    const {name , password  } = req.body;

    // duplicate 
    // const existedUser = await User.findOne({
    //     $or: [{ username }, { email }]
    // })

    // if (existedUser) {
    //     throw new ApiError(409, "User with email or username already exists")
    // }
    
    // check if any field is empty
    // if (
    //     [name, password].some((field) => field?.trim() === "")
    // ) {
    //     throw new ApiError(400, "All fields are required")
    // }

    // avatar
    const avatarLocalPath = req.files?.avatar[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    // upload on cloudinary
    const avatarFromCloudinary = await cloudinaryUploader(avatarLocalPath);

    if (!avatarFromCloudinary) {
        throw new ApiError(400, "Avatar file is required")
    }
   
     
    // create the user
    const createdUser = await User.create({
        name,
        password,
        avatar: avatarFromCloudinary.url

    })

    return res.status(200).json(
        new ApiResponse(200,createdUser,"user Created Successfully")
    )
})

export {registerUser}