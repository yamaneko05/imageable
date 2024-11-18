import { createClient } from "@/utils/supabase/server";
import { PrismaClient } from "@prisma/client";

export const authService = {
  getLoginUserId: async () => {
    const supabase = await createClient();
    const prisma = new PrismaClient();

    const { data } = await supabase.auth.getUser();

    const { id } = await prisma.user.findUniqueOrThrow({
      where: {
        authId: data.user?.id,
      },
      select: {
        id: true,
      },
    });

    return id;
  },
  getLoginUserAuthId: async () => {
    const supabase = await createClient();

    const { data } = await supabase.auth.getUser();

    if (data.user === null) {
      throw new Error("認証されていません");
    }

    return data.user!.id;
  },
};
