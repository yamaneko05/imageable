import { createClient } from "@/utils/supabase/server";
import { imageService } from "./imageService";

const BUCKET_ID = "profile-images";

export const storageService = {
  getPublicUrl: async (path: string) => {
    const supabase = await createClient();

    const { data } = await supabase.storage.from(BUCKET_ID).getPublicUrl(path);

    return data.publicUrl;
  },
  uploadImage: async (image: File) => {
    const resized = await imageService.resize(image);

    const supabase = await createClient();

    const path = crypto.randomUUID() + "." + image.name.split(".").pop();

    const { data, error } = await supabase.storage
      .from(BUCKET_ID)
      .upload(path, resized);

    if (error) {
      console.log(error);
    }

    return data!;
  },
};
