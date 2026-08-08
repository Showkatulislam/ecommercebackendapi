export interface FileStorage {
  upload(file: Express.Multer.File, folderName: string): Promise<{ secure_url: string }>;
  delete(url: string): Promise<void>;
}
