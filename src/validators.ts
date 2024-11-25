import { Prisma } from "@prisma/client";

export const validators = {
  postWithRelations: Prisma.validator<Prisma.PostFindManyArgs>()({
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
      media: true,
      _count: {
        select: {
          likedUsers: true,
          comments: true,
        },
      },
    },
  }),
  userIncludeProfile: Prisma.validator<Prisma.UserFindManyArgs>()({
    include: {
      profile: true,
    },
  }),
};
