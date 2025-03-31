// ikse andhar sare functions honge
import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import { cloudinaryUploader } from "../utils/cloudinary.utils.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler( async (req, res) => {
    const { username , password , email  } = req.body;

    
    // check if any field is empty
    if (
        [username, password , email].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    // duplicate 
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }

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
        username,
        password,
        avatar: avatarFromCloudinary.url

    })

    return res.status(200).json(
        new ApiResponse(200,createdUser,"user Created Successfully")
    )
})

const login = asyncHandler(async (req , res) => {
    // assign feilds , check for empty ,
    //  check for user exists or not , then Token Generation
    const {email, username, password} = req.body

    if (!username && !email) {
        throw new ApiError(400, "username or email is required")
    }

    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })

    if(!existedUser){
        throw new ApiError(404,"Unable to find user")
    }

    // password check
    const isPasswordValid = await existedUser.passwordCheck(password);
    if(!isPasswordValid){
        throw new ApiError(401,"password is incorrect");
    }
    
    // token part


    return res.json( 
        new ApiResponse(200,"Logined Successfully")
    )
}
)

export {registerUser , login}