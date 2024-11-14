"use client";

import { InputButton } from "@/components/ui";

export default function UploadImageButton() {
  return (
    <form>
      <InputButton variants={{ size: "sm" }} attributes={{ type: "file" }}>
        画像を選択
      </InputButton>
    </form>
  );
}
