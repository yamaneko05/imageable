import { createClient } from "@/utils/supabase/server";

export const storageService = {
  getPublicUrl: async (path: string) => {
    const supabase = await createClient();

    const { data } = await supabase.storage.from("images").getPublicUrl(path);

    return data.publicUrl;
  },
};
