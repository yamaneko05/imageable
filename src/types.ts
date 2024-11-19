import { validators } from "@/validators";
import { Prisma } from "@prisma/client";

export type PostWithRelations = Prisma.PostGetPayload<
  typeof validators.postWithRelations
>;

export type UserForProfilePage = Prisma.UserGetPayload<
  ReturnType<typeof validators.userForProfilePage>
>;

export type UserFollowed = Prisma.UserGetPayload<
  ReturnType<typeof validators.userFollowed>
>;

export type UserFollowing = Prisma.UserGetPayload<
  ReturnType<typeof validators.userFollowing>
>;
