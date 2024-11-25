import { PrismaClient } from "@prisma/client";

export default async function getMedia(postId: string) {
  const prisma = new PrismaClient();

  const media = await prisma.media.findUniqueOrThrow({
    where: {
      postId: postId,
    },
  });

  return media;
}
