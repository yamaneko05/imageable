import sharp from "sharp";

export const imageService = {
  resize: async (image: File) => {
    const buffer = await image.arrayBuffer();

    const resized = await sharp(buffer)
      .resize({
        width: 240,
        height: 240,
        fit: "cover",
      })
      .toBuffer();

    return resized;
  },
  getExtension: (image: File) => image.name.split(".").pop(),
};
