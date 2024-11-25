import { validators } from "@/validators";
import { Prisma, PrismaClient } from "@prisma/client";

const validator = Prisma.validator<Prisma.PostFindManyArgs>()(
  validators.postWithRelations,
);

export default async function getPosts() {
  const prisma = new PrismaClient();

  const posts = await prisma.post.findMany(validator);

  return posts;
}
