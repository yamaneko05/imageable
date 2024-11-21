import { PrismaClient } from "@prisma/client";

export const profileService = {
  getProfileByUserId: async (userId: string) => {
    const prisma = new PrismaClient();

    const profile = await prisma.profile.findFirstOrThrow({
      where: {
        user: {
          id: userId,
        },
      },
    });

    return profile;
  },
};
