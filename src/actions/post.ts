"use server";

import { getLoginUserId } from "@/helpers";
import { authService } from "@/services/authService";
import { userService } from "@/services/userService";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createPostAction(_prevState: any, formData: FormData) {
  const data = {
    description: formData.get("description") as string,
  };

  const loginUserId = await getLoginUserId();

  const prisma = new PrismaClient();

  await prisma.post.create({
    data: {
      userId: loginUserId,
      ...data,
    },
  });

  redirect(`/profile/${loginUserId}`);
}
