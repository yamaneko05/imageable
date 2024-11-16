import { validators } from "@/validators";
import { PrismaClient } from "@prisma/client";

export const userService = {
  getUserForProfilePage: async (userId: string) => {
    const prisma = new PrismaClient();

    const user = await prisma.user.findUniqueOrThrow(
      validators.userForProfilePage(userId),
    );

    return user;
  },
};
