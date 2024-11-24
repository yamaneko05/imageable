"use server";

import { PrismaClient } from "@prisma/client";
import { storageService } from "@/services/storageService";
import { redirect } from "next/navigation";
import { imageService } from "@/services/imageService";
import { getLoginUserId } from "@/heplers/getLoginUserId";
import { profileSchema } from "@/schema";
import { revalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function update(_prevState: any, formData: FormData) {
  const old = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
  };

  const validationResult = profileSchema.safeParse(old);

  if (validationResult.success) {
    const prisma = new PrismaClient();
    const loginUserId = await getLoginUserId();

    await prisma.profile.update({
      where: {
        userId: loginUserId,
      },
      data: validationResult.data,
    });

    revalidatePath("/profile/edit");
  } else {
    return {
      validationError: validationResult.error.flatten().fieldErrors,
      old: old,
    };
  }
}

export async function uploadImage(image: File) {
  const resized = await imageService.resize(image, {
    width: 240,
    height: 240,
    fit: "cover",
  });

  const { path } = await storageService.upload(resized);

  const loginUserId = await getLoginUserId();

  const prisma = new PrismaClient();

  await prisma.profile.update({
    where: {
      userId: loginUserId,
    },
    data: {
      image: path,
    },
  });

  return { newImage: path };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function create(_prevState: any, formData: FormData) {
  const old = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
  };

  const validationResult = profileSchema.safeParse(old);

  if (validationResult.success) {
    const prisma = new PrismaClient();
    const loginUserId = await getLoginUserId();

    await prisma.profile.create({
      data: {
        userId: loginUserId,
        ...validationResult.data,
      },
    });

    redirect("/signup/edit-profile-image");
  } else {
    return {
      validationError: validationResult.error.flatten().fieldErrors,
      old: old,
    };
  }
}
