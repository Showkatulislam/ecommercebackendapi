import { v2 as cloudinary } from 'cloudinary';
import { env } from '../config/env.js';

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINAERY_API_KEY,
  api_secret: env.CLOUDINAERY_API_KEY_SECRET,
});

export default cloudinary;
