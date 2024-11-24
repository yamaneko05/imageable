import { validators } from "@/validators";
import { Prisma } from "@prisma/client";

export type PostWithRelations = Prisma.PostGetPayload<
  typeof validators.postWithRelations
>;

export type UserForProfilePage = Prisma.UserGetPayload<
  ReturnType<typeof validators.userForProfilePage>
>;

export type UserFollowed = Prisma.UserGetPayload<
  ReturnType<typeof validators.userFollowedBy>
>;

export type UserFollowing = Prisma.UserGetPayload<
  ReturnType<typeof validators.userFollowing>
>;

export type Comments = Prisma.CommentGetPayload<
  ReturnType<typeof validators.comments>
>;

export type UserincludeProfile = Prisma.UserGetPayload<
  ReturnType<typeof validators.userIncludeProfile>
>;
