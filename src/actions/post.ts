"use server";

import { authService } from "@/services/authService";
import { userService } from "@/services/userService";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createPostAction(_prevState: any, formData: FormData) {
  const data = {
    description: formData.get("description") as string,
  };

  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const prisma = new PrismaClient();

  await prisma.post.create({
    data: {
      userId: loginUser.id,
      ...data,
    },
  });

  redirect(`/profile/${loginUser.id}`);
}
