import sharp, { ResizeOptions } from "sharp";

export const imageService = {
  resize: async (
    image: File,
    options: ResizeOptions = {
      width: 240,
      fit: "cover",
    },
  ) => {
    const buffer = await image.arrayBuffer();

    const resized = await sharp(buffer).resize(options).webp().toBuffer();

    return resized;
  },
  getExtension: (image: File) => image.name.split(".").pop(),
};
