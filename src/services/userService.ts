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
  getUserFollowed: async (userId: string) => {
    const prisma = new PrismaClient();

    const users = await prisma.user.findMany(validators.userFollowed(userId));

    return users;
  },
  getUserFollowing: async (userId: string) => {
    const prisma = new PrismaClient();

    const users = await prisma.user.findMany(validators.userFollowing(userId));

    return users;
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
