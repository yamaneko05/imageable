"use server";

import { authService } from "@/services/authService";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { storageService } from "@/services/storageService";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function update(_prevState: any, formData: FormData) {
  const prisma = new PrismaClient();

  const loginUserId = await authService.getLoginUserId();

  const data = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
  };

  await prisma.profile.update({
    where: {
      userId: loginUserId,
    },
    data: data,
  });

  revalidatePath("/profile/edit");

  return { success: true };
}

export async function uploadImage(image: File) {
  const { path } = await storageService.uploadImage(image);

  const loginUserId = await authService.getLoginUserId();

  const prisma = new PrismaClient();

  await prisma.profile.update({
    where: {
      userId: loginUserId,
    },
    data: {
      image: path,
    },
  });

  revalidatePath("/profile/edit");
  return { success: true };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function create(_prevState: any, formData: FormData) {
  const prisma = new PrismaClient();

  const loginUserId = await authService.getLoginUserId();

  const data = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
  };

  await prisma.profile.create({
    data: {
      userId: loginUserId,
      ...data,
    },
  });

  redirect("/signup/edit-profile-image");

  return { success: true };
}
