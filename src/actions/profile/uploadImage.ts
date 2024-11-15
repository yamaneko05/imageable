"use server";

import { authService } from "@/services/authService";
import { storageService } from "@/services/storageService";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
