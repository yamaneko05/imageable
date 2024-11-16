import { PrismaClient } from "@prisma/client";

export const likeService = {
  getLikedPostIdsByUserId: async (userId: string) => {
    const prisma = new PrismaClient();

    const likedByUserPosts = await prisma.like.findMany({
      select: {
        postId: true,
      },
      where: {
        userId: userId,
      },
    });

    const likedByUserPostIds = likedByUserPosts.map((post) => post.postId);

    return likedByUserPostIds;
  },
};
