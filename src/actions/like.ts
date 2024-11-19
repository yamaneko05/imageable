"use server";

import { authService } from "@/services/authService";
import { userService } from "@/services/userService";
import { PrismaClient } from "@prisma/client";

export async function attach(postId: string) {
  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const prisma = new PrismaClient();

  await prisma.like.create({
    data: {
      userId: loginUser.id,
      postId: postId,
    },
  });
}

export async function detach(postId: string) {
  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const prisma = new PrismaClient();

  await prisma.like.delete({
    where: {
      postId_userId: {
        userId: loginUser.id,
        postId: postId,
      },
    },
  });
}
