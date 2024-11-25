import { Prisma, PrismaClient } from "@prisma/client";

function validator(userId: string) {
  return Prisma.validator<Prisma.UserFindManyArgs>()({
    where: {
      following: {
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

export default async function getFollowers(userId: string) {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany(validator(userId));

  return users;
}

export type Follower = Prisma.UserGetPayload<ReturnType<typeof validator>>;
