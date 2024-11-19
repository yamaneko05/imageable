import { createClient } from "@/utils/supabase/client";

const BUCKET_ID = "profile-images";

export const storageServiceBrowser = {
  getPublicUrl: async (path: string) => {
    const supabase = await createClient();

    const { data } = await supabase.storage.from(BUCKET_ID).getPublicUrl(path);

    return data.publicUrl;
  },
};
