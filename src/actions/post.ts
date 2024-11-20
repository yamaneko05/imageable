"use server";

import { getLoginUserId } from "@/helpers";
import { postSchema } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createPostAction(_prevState: any, formData: FormData) {
  const old = {
    description: formData.get("description") as string,
  };

  const validationResult = postSchema.safeParse(old);

  if (validationResult.success) {
    const loginUserId = await getLoginUserId();

    const prisma = new PrismaClient();

    await prisma.post.create({
      data: {
        userId: loginUserId,
        ...validationResult.data,
      },
    });

    redirect(`/profile/${loginUserId}`);
  } else {
    return {
      validationError: validationResult.error.flatten().fieldErrors,
      old: old,
    };
  }
}
