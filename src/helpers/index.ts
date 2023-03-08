export const normalizeImage = (image: string) => {
  return image.startsWith("ipfs://")
    ? "https://ipfs.io/" + image.replace(":/", "")
    : image;
};
