import { Prisma, PrismaClient } from "@prisma/client";

function validator(postId: string) {
  const validator = Prisma.validator<Prisma.CommentFindManyArgs>()({
    where: {
      postId: postId,
    },
    include: {
      user: {
        include: {
          profile: true,
        },
      },
    },
  });
  return validator;
}

export default async function getComments(postId: string) {
  const prisma = new PrismaClient();

  const comments = await prisma.comment.findMany(validator(postId));

  return comments;
}

export type Comment = Prisma.CommentGetPayload<ReturnType<typeof validator>>;
