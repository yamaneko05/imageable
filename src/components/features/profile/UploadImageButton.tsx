"use client";

import { uploadImage } from "@/actions/profile/uploadImage";
import { Alert, InputButton } from "@/components/ui";
import { ChangeEvent, useState } from "react";

export default function UploadImageButton() {
  const [state, setState] = useState<{ success: boolean }>();
  const [isPending, setIsPending] = useState(false);

  return (
    <>
      {state?.success && <Alert>保存しました</Alert>}
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
    </>
  );
}
