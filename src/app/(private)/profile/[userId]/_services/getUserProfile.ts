import { Prisma, PrismaClient } from "@prisma/client";

function validator(userId: string) {
  return Prisma.validator<Prisma.UserFindUniqueOrThrowArgs>()({
    where: {
      id: userId,
    },
    include: {
      profile: true,
      _count: {
        select: {
          followedBy: true,
          following: true,
          posts: true,
        },
      },
    },
  });
}

export default async function getUserProfile(userId: string) {
  const prisma = new PrismaClient();

  const user = await prisma.user.findUniqueOrThrow(validator(userId));

  return user;
}

export type UserProfile = Prisma.UserGetPayload<ReturnType<typeof validator>>;
