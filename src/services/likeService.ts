import { PrismaClient } from "@prisma/client";

export const likeService = {
  getLikedPostIdsByUserId: async (userId: string) => {
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
  },
  getLikesByPostId: async (postId: string) => {
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
  },
};
