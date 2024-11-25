import { PrismaClient } from "@prisma/client";

export default async function getLikesPostId(userId: string) {
  const prisma = new PrismaClient();

  const likedByUserPosts = await prisma.like.findMany({
    select: {
      postId: true,
    },
    where: {
      user: {
        id: userId,
      },
    },
  });

  const likedByUserPostIds = likedByUserPosts.map((post) => post.postId);

  return likedByUserPostIds;
}
