import { PrismaClient } from "@prisma/client";

export default async function getProfileImage(userId: string) {
  const prisma = new PrismaClient();

  const profile = await prisma.profile.findFirstOrThrow({
    where: {
      user: {
        id: userId,
      },
    },
    select: {
      image: true,
    },
  });

  return profile.image;
}
