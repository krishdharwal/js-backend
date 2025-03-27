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

        // Delete local file after upload
        await fs.promises.unlink(filePath);
        
        return response.url;
    } catch (err) {
        console.error("Cloudinary upload error:", err);
        
        // Ensure file is deleted even on error
        await fs.promises.unlink(filePath).catch(err => console.error("Error deleting file:", err));

        return null;
    }
};

export { cloudinaryUploader };
