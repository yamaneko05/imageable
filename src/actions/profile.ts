"use server";

import { authService } from "@/services/authService";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { storageService } from "@/services/storageService";
import { redirect } from "next/navigation";
import { userService } from "@/services/userService";
import { imageService } from "@/services/imageService";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function update(_prevState: any, formData: FormData) {
  const prisma = new PrismaClient();

  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const data = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
  };

  await prisma.profile.update({
    where: {
      userId: loginUser.id,
    },
    data: data,
  });

  revalidatePath("/profile/edit");

  return { success: true };
}

export async function uploadImage(image: File) {
  const extension = imageService.getExtension(image) as string;
  const resized = await imageService.resize(image);

  const { path } = await storageService.upload(resized, extension);

  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const prisma = new PrismaClient();

  await prisma.profile.update({
    where: {
      userId: loginUser.id,
    },
    data: {
      image: path,
    },
  });

  const newImageUrl = await storageService.getPublicUrl(path);

  return { newImageUrl };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function create(_prevState: any, formData: FormData) {
  const prisma = new PrismaClient();

  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const data = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
  };

  await prisma.profile.create({
    data: {
      userId: loginUser.id,
      ...data,
    },
  });

  redirect("/signup/edit-profile-image");
}
