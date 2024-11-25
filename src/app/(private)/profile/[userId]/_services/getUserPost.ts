import { validators } from "@/validators";
import { Prisma, PrismaClient } from "@prisma/client";

export function userPostValidator(userId: string) {
  return Prisma.validator<Prisma.PostFindManyArgs>()({
    where: {
      userId: userId,
    },
    ...validators.postWithRelations,
  });
}

export default async function getUserPost(userId: string) {
  const prisma = new PrismaClient();

  const posts = await prisma.post.findMany(userPostValidator(userId));

  return posts;
}

export type UserPost = Prisma.UserGetPayload<
  ReturnType<typeof userPostValidator>
>;
