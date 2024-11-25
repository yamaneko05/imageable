"use server";

import { getLoginUserId } from "@/heplers/getLoginUserId";
import { postSchema } from "@/schema";
import { storageService } from "@/services/storageService";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createPostAction(
  description: string,
  media?: {
    buf: Buffer;
    extension: string;
  },
) {
  const validationResult = postSchema.safeParse({ description });

  if (validationResult.success) {
    const loginUserId = await getLoginUserId();

    const prisma = new PrismaClient();

    let mediaPath = undefined;

    if (media) {
      const { path } = await storageService.upload(media.buf);

      mediaPath = path;
    }

    await prisma.post.create({
      data: {
        userId: loginUserId,
        ...validationResult.data,
        media: mediaPath
          ? {
              create: {
                media: mediaPath,
              },
            }
          : undefined,
      },
    });

    revalidatePath("/timeline");

    return { success: true };
  } else {
    return {
      validationError: validationResult.error.flatten().fieldErrors,
    };
  }
}

export async function deletePostAction(postId: string) {
  const prisma = new PrismaClient();

  const post = await prisma.post.findUniqueOrThrow({ where: { id: postId } });
  const loginUserId = await getLoginUserId();

  if (post.userId !== loginUserId) {
    return { error: "この投稿を削除する権限がありません" };
  }

  const deleteComments = prisma.comment.deleteMany({
    where: { postId: postId },
  });
  const deleteLikes = prisma.like.deleteMany({ where: { postId: postId } });
  const deleteMedia = prisma.media.deleteMany({ where: { postId: postId } });
  const deletePost = prisma.post.delete({ where: { id: postId } });

  await prisma.$transaction([
    deleteComments,
    deleteLikes,
    deleteMedia,
    deletePost,
  ]);

  return { success: true };
}
