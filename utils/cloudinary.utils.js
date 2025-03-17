import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const cloudinaryUploader = async (filePath) => {
    try {
        if (!filePath) return null;
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto"
        });
        fs.unlink(filePath);
        return response.url;
    } catch (err) {
        fs.unlink(filePath);
        return null;
    }

}

export {cloudinaryUploader}