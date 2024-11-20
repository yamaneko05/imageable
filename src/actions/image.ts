"use server";

import sharp from "sharp";

export async function resize(image: File, options: sharp.ResizeOptions) {
  const buffer = await image.arrayBuffer();

  const resized = await sharp(buffer).resize(options).toBuffer();

  return resized;
}

export async function getExtension(image: File) {
  return image.name.split(".").pop();
}
