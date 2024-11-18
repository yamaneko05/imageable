import { validators } from "@/validators";
import { PrismaClient } from "@prisma/client";
import { authService } from "./authService";

export const userService = {
  getUserForProfilePage: async (userId: string) => {
    const prisma = new PrismaClient();

    const user = await prisma.user.findUniqueOrThrow(
      validators.userForProfilePage(userId),
    );

    return user;
  },
  getFollowing: async (authId: string) => {
    const prisma = new PrismaClient();

    const { following } = await prisma.user.findUniqueOrThrow({
      where: {
        authId: authId,
      },
      include: {
        following: {
          include: {
            profile: true,
          },
        },
      },
    });

    return following;
  },
  getFollowedBy: async (authId: string) => {
    const prisma = new PrismaClient();

    const { followedBy } = await prisma.user.findUniqueOrThrow({
      where: {
        authId: authId,
      },
      include: {
        followedBy: {
          include: {
            profile: true,
          },
        },
      },
    });

    return followedBy;
  },
  isFollowedByLoginUser: async (userId: string) => {
    const loginUserId = await authService.getLoginUserId();

    const prisma = new PrismaClient();

    const tmp = await prisma.user.findUnique({
      where: {
        id: loginUserId,
        following: {
          some: {
            id: userId,
          },
        },
      },
    });

    return Boolean(tmp);
  },
};
