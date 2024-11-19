"use server";

import { authService } from "@/services/authService";
import { userService } from "@/services/userService";
import { PrismaClient } from "@prisma/client";

export async function attach(userId: string) {
  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const prisma = new PrismaClient();

  await prisma.user.update({
    where: {
      id: loginUser.id,
    },
    data: {
      following: {
        connect: { id: userId },
      },
    },
  });
}

export async function detach(userId: string) {
  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const prisma = new PrismaClient();

  await prisma.user.update({
    where: {
      id: loginUser.id,
    },
    data: {
      following: {
        disconnect: { id: userId },
      },
    },
  });
}
