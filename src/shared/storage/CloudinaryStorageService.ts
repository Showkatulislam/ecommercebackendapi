import type { FileStorage } from './storage.interface.js';
import cloudinary from '../../lib/cloudinary.js';

export class CloudinaryStorageService implements FileStorage {
  upload(file: Express.Multer.File, folderName: string): Promise<{ secure_url: string }> {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: folderName,
          resource_type: 'image',
        },
        (error, result) => {
          if (error || !result) {
            return reject(error ?? new Error('Upload failed'));
          }

          resolve({
            secure_url: result.secure_url,
          });
        }
      );

      stream.end(file.buffer);
    });
  }

  async delete(publicId: string): Promise<void> {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      throw error;
    }
  }
}
