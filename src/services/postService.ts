import { validators } from "@/validators";
import { PrismaClient } from "@prisma/client";

export const postService = {
  getPostsForTimelinePage: async () => {
    const prisma = new PrismaClient();

    const posts = await prisma.post.findMany(validators.postsForTimelinePage());

    return posts;
  },
};
