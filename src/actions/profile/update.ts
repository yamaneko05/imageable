"use server";

import { getLoginUserId } from "@/services/authService";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function update(_prevState: any, formData: FormData) {
  const prisma = new PrismaClient();

  const loginUserId = await getLoginUserId();

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
