import { validators } from "@/validators";
import { Prisma } from "@prisma/client";

export type PostWithRelations = Prisma.PostGetPayload<
  typeof validators.postWithRelations
>;

export type UserIncludeProfile = Prisma.UserGetPayload<
  typeof validators.userIncludeProfile
>;

export type NavItem = {
  path: string;
  name: string;
  lucide: JSX.Element;
};
