"use server";

import { getLoginUserId } from "@/heplers/getLoginUserId";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createCommentAction(postId: string, comment: string) {
  const loginUserId = await getLoginUserId();

  const prisma = new PrismaClient();

  await prisma.comment.create({
    data: {
      postId: postId,
      comment: comment,
      userId: loginUserId,
    },
  });

  revalidatePath(`/post/$${postId}`);
  return { success: true };
}
