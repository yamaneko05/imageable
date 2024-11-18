import { PrismaClient } from "@prisma/client";
import { authService } from "./authService";

export const likeService = {
  getLikedPostIdsByLoginUser: async () => {
    const loginUserAuthId = await authService.getLoginUserAuthId();

    const prisma = new PrismaClient();

    const likedByUserPosts = await prisma.like.findMany({
      select: {
        postId: true,
      },
      where: {
        user: {
          authId: loginUserAuthId,
        },
      },
    });

    const likedByUserPostIds = likedByUserPosts.map((post) => post.postId);

    return likedByUserPostIds;
  },
};
