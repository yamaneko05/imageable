import { PrismaClient } from "@prisma/client";

export default async function getLikes(postId: string) {
  const prisma = new PrismaClient();

  const likes = await prisma.like.findMany({
    where: {
      postId: postId,
    },
    include: {
      user: {
        include: {
          profile: true,
        },
      },
    },
  });

  return likes;
}
