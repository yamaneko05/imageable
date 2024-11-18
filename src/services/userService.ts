import { validators } from "@/validators";
import { PrismaClient } from "@prisma/client";

export const userService = {
  getUserByAuthId: async function (authId: string) {
    const prisma = new PrismaClient();

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        authId,
      },
    });

    return user;
  },
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
  firstIsFollowedBySecond: async (
    firstUserId: string,
    secondUserId: string,
  ) => {
    const prisma = new PrismaClient();

    const tmp = await prisma.user.findUnique({
      where: {
        id: firstUserId,
        followedBy: {
          some: {
            id: secondUserId,
          },
        },
      },
    });

    return Boolean(tmp);
  },
};
