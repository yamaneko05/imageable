import { createClient } from "@/utils/supabase/server";
import { PrismaClient } from "@prisma/client";

export async function getLoginUserId() {
  const supabase = await createClient();

  const authId = (await supabase.auth.getUser()).data.user!.id;

  const prisma = new PrismaClient();

  const user = await prisma.user.findUniqueOrThrow({
    where: { authId },
    select: { id: true },
  });

  return user.id;
}
