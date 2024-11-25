import { Prisma, PrismaClient } from "@prisma/client";

function validator(userId: string) {
  return Prisma.validator<Prisma.UserFindManyArgs>()({
    where: {
      followedBy: {
        some: {
          id: userId,
        },
      },
    },
    include: {
      profile: true,
    },
  });
}

export default async function getFollowings(userId: string) {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany(validator(userId));

  return users;
}

export type Following = Prisma.UserGetPayload<ReturnType<typeof validator>>;
