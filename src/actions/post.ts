"use server";

import { getLoginUserId } from "@/helpers";
import { postSchema } from "@/schema";
import { storageService } from "@/services/storageService";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

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
      const { path } = await storageService.upload(media.buf, media.extension);

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

    redirect(`/profile/${loginUserId}`);
  } else {
    return {
      validationError: validationResult.error.flatten().fieldErrors,
    };
  }
}
