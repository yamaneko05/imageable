"use client";

import { uploadImage } from "@/actions/profile";
import { Alert, Avatar, InputButton } from "@/components/ui";
import { ChangeEvent, useState } from "react";

export default function UploadImageForm({ imageUrl }: { imageUrl: string }) {
  const [state, setState] = useState<{ success: boolean }>();
  const [isPending, setIsPending] = useState(false);

  return (
    <div className="mb-6 rounded-xl bg-zinc-200 p-3">
      {state?.success && <Alert>保存しました</Alert>}
      <div className="flex items-center justify-between">
        <Avatar src={imageUrl} size={96} />
        <InputButton
          variants={{ size: "sm" }}
          attributes={{
            type: "file",
            accept: "image/*",
            disabled: isPending,
            onChange: async (event: ChangeEvent<HTMLInputElement>) => {
              setIsPending(true);
              const newState = await uploadImage(event.target.files![0]);
              setIsPending(false);
              setState(newState);
            },
          }}
          id="js-image-input"
        >
          画像を選択
        </InputButton>
      </div>
    </div>
  );
}
