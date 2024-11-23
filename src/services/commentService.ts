import { validators } from "@/validators";
import { PrismaClient } from "@prisma/client";

export const commentService = {
  getCommentsByPostId: async (postId: string) => {
    const prisma = new PrismaClient();

    const comments = await prisma.comment.findMany(validators.comments(postId));

    return comments;
  },
};
