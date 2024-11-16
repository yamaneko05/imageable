import { validators } from "@/validators";
import { PrismaClient } from "@prisma/client";

export const userService = {
  getUserForProfilePage: async (userId: string) => {
    const prisma = new PrismaClient();

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
      include: {
        profile: true,
        posts: validators.postWithRelations,
        _count: {
          select: {
            followedBy: true,
            following: true,
            posts: true,
          },
        },
      },
    });

    return user;
  },
};
