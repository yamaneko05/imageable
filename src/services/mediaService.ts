import { PrismaClient } from "@prisma/client";

export const mediaService = {
  getMediaByPostId: async (postId: string) => {
    const prisma = new PrismaClient();

    const media = await prisma.media.findUniqueOrThrow({
      where: {
        postId: postId,
      },
    });

    return media;
  },
};
