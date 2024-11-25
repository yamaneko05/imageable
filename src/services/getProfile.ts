import { PrismaClient } from "@prisma/client";

export default async function getProfile(userId: string) {
  const prisma = new PrismaClient();

  const profile = await prisma.profile.findFirstOrThrow({
    where: {
      user: {
        id: userId,
      },
    },
  });

  return profile;
}
