"use client";

import { uploadImage } from "@/actions/profile";
import { Avatar, InputButton } from "@/components/ui";
import { ChangeEvent, useState } from "react";

export default function UploadImageForm({ imageUrl }: { imageUrl: string }) {
  const [src, setSrc] = useState<string>(imageUrl);
  const [isPending, setIsPending] = useState(false);

  return (
    <div className="mb-6 rounded-xl bg-zinc-200 p-3">
      <div className="flex items-center justify-between">
        <div className="h-24 w-24">
          <Avatar src={src} variants={{ border: true }} />
        </div>
        <InputButton
          variants={{ size: "sm" }}
          attributes={{
            type: "file",
            accept: "image/*",
            disabled: isPending,
            onChange: async (event: ChangeEvent<HTMLInputElement>) => {
              setIsPending(true);
              const { newImageUrl } = await uploadImage(event.target.files![0]);
              setIsPending(false);
              setSrc(newImageUrl);
            },
          }}
          isPending={isPending}
          id="js-image-input"
        >
          画像を選択
        </InputButton>
      </div>
    </div>
  );
}
