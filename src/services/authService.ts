import { createClient } from "@/utils/supabase/server";

export const authService = {
  getLoginUserAuthId: async () => {
    const supabase = await createClient();

    const { data } = await supabase.auth.getUser();

    return data.user!.id;
  },
};
