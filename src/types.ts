import { validators } from "@/validators";
import { Prisma } from "@prisma/client";

export type PostWithRelations = Prisma.PostGetPayload<
  typeof validators.postWithRelations
>;

export type UserForProfilePage = Prisma.UserGetPayload<
  ReturnType<typeof validators.userForProfilePage>
>;
