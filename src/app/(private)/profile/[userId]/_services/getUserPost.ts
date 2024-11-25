import { validators } from "@/validators";
import { Prisma, PrismaClient } from "@prisma/client";

function validator(userId: string) {
  return Prisma.validator<Prisma.PostFindManyArgs>()({
    where: {
      userId: userId,
    },
    ...validators.postWithRelations,
  });
}

export default async function getUserPost(userId: string) {
  const prisma = new PrismaClient();

  const posts = await prisma.post.findMany(validator(userId));

  return posts;
}

export type UserPost = Prisma.UserGetPayload<ReturnType<typeof validator>>;
