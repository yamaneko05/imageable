import { PrismaClient } from "@prisma/client";

export const userService = {
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
