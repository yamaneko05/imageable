"use server";

import { getLoginUserId } from "@/heplers/getLoginUserId";
import { PrismaClient } from "@prisma/client";

export async function followAction(userId: string) {
  const loginUserId = await getLoginUserId();

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

export async function unfollowAction(userId: string) {
  const loginUserId = await getLoginUserId();

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
