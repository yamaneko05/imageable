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
  userForProfilePage: function (userId: string) {
    const validator = Prisma.validator<Prisma.UserFindUniqueOrThrowArgs>()({
      where: {
        id: userId,
      },
      include: {
        profile: true,
        posts: this.postWithRelations,
        _count: {
          select: {
            followedBy: true,
            following: true,
            posts: true,
          },
        },
      },
    });

    return validator;
  },
  postsForTimelinePage: function () {
    const validator = Prisma.validator<Prisma.PostFindManyArgs>()(
      this.postWithRelations,
    );
    return validator;
  },
  userFollowed: (userId: string) => {
    const validator = Prisma.validator<Prisma.UserFindManyArgs>()({
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
    return validator;
  },
  userFollowing: (userId: string) => {
    const validator = Prisma.validator<Prisma.UserFindManyArgs>()({
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
    return validator;
  },
};
