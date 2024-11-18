"use server";

import { authService } from "@/services/authService";
import { PrismaClient } from "@prisma/client";

export async function attach(userId: string) {
  const loginUserId = await authService.getLoginUserId();

  const prisma = new PrismaClient();

  await prisma.user.update({
    where: {
      id: loginUserId,
    },
    data: {
      following: {
        connect: { id: userId },
      },
    },
  });
}

export async function detach(userId: string) {
  const loginUserId = await authService.getLoginUserId();

  const prisma = new PrismaClient();

  await prisma.user.update({
    where: {
      id: loginUserId,
    },
    data: {
      following: {
        disconnect: { id: userId },
      },
    },
  });
}