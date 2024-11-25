import { Prisma, PrismaClient } from "@prisma/client";

export function userProfileValidator(userId: string) {
  return Prisma.validator<Prisma.UserFindUniqueOrThrowArgs>()({
    where: {
      id: userId,
    },
    include: {
      profile: true,
    },
  });
}

export default async function getUserProfile(userId: string) {
  const prisma = new PrismaClient();

  const user = await prisma.user.findUniqueOrThrow(
    userProfileValidator(userId),
  );

  return user;
}

export type UserProfile = Prisma.UserGetPayload<
  ReturnType<typeof userProfileValidator>
>;
