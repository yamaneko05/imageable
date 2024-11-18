import { createClient } from "@/utils/supabase/server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

export const authService = {
  getLoginUserId: async function () {
    const prisma = new PrismaClient();

    const loginUserAuthId = await this.getLoginUserAuthId();

    const { id } = await prisma.user.findUniqueOrThrow({
      where: {
        authId: loginUserAuthId,
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

    if (data.user) {
      return data.user.id;
    }

    redirect("/error");
  },
};
