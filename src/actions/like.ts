"use server";

import { getLoginUserId } from "@/heplers/getLoginUserId";
import { PrismaClient } from "@prisma/client";

export async function attach(postId: string) {
  const loginUserId = await getLoginUserId();

  const prisma = new PrismaClient();

  await prisma.like.create({
    data: {
      userId: loginUserId,
      postId: postId,
    },
  });
}

export async function detach(postId: string) {
  const loginUserId = await getLoginUserId();

  const prisma = new PrismaClient();

  await prisma.like.delete({
    where: {
      postId_userId: {
        userId: loginUserId,
        postId: postId,
      },
    },
  });
}
