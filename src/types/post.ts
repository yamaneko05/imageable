import { Prisma } from "@prisma/client";

export const postWithRelation = Prisma.validator<Prisma.PostFindManyArgs>()({
  orderBy: [
    {
      createdAt: "desc",
    },
  ],
  include: {
    user: {
      include: {
        profile: true,
      },
    },
    _count: {
      select: {
        likedUsers: true,
        comments: true,
      },
    },
  },
});

export type PostWithRelation = Prisma.PostGetPayload<typeof postWithRelation>;
