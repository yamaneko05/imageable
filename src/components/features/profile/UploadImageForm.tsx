"use client";

import { uploadImage } from "@/actions/profile";
import { Avatar, InputButton } from "@/components/ui";
import { ChangeEvent, useState } from "react";

export default function UploadImageForm({ image }: { image: string | null }) {
  const [profileImage, setProfileImage] = useState(image);
  const [isPending, setIsPending] = useState(false);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsPending(true);
    const { newImage } = await uploadImage(event.target.files![0]);
    setIsPending(false);
    setProfileImage(newImage);
  };

  return (
    <div className="mb-6 rounded-xl bg-slate-50 p-3">
      <div className="flex items-center justify-between">
        <div className="h-24 w-24">
          <Avatar image={profileImage} variants={{ border: true }} />
        </div>
        <InputButton
          variants={{ size: "sm" }}
          type="file"
          accept="image/*"
          disabled={isPending}
          onChange={handleImageChange}
          isPending={isPending}
          id="js-image-input"
        >
          画像を選択
        </InputButton>
      </div>
    </div>
  );
}
