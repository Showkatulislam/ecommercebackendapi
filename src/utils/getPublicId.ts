export function getPublicId(url: string): string {
  const parts = url.split('/');
  const fileName = parts[parts.length - 1];
  const publicId = `products/${fileName?.split('.')[0]}`;
  console.log(publicId);
  return publicId;
}
