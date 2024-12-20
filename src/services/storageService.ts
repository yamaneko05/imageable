import { createClient } from "@/utils/supabase/server";

const BUCKET_ID = "profile-images";

export const storageService = {
  getPublicUrl: async (path: string) => {
    const supabase = await createClient();

    const { data } = supabase.storage.from(BUCKET_ID).getPublicUrl(path);

    return data.publicUrl;
  },
  upload: async (buf: Buffer) => {
    const supabase = await createClient();

    const path = crypto.randomUUID() + ".webp";

    const { data, error } = await supabase.storage
      .from(BUCKET_ID)
      .upload(path, buf);

    if (error) {
      console.log(error);
    }

    return data!;
  },
};
