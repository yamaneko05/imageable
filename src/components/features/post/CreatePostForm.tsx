"use client";

import { getExtension, resize } from "@/actions/image";
import { createPostAction } from "@/actions/post";
import { Button, FormField, InputButton, Textarea } from "@/components/ui";
import { LucideImage, LucideSend } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function CreatePostForm() {
  const [state, setState] =
    useState<Awaited<ReturnType<typeof createPostAction>>>();
  const [isPending, setIsPending] = useState(false);

  const [description, setDescription] = useState<string>();

  const dispatch = async () => {
    setIsPending(true);

    const newState = await createPostAction(description!, media);

    setState(newState);
    setIsPending(false);
  };

  const [media, setMedia] = useState<{ buf: Buffer; extension: string }>();
  const [mediaIsPending, setMediaIsPending] = useState(false);

  const [mediaDataUrl, setMediaDataUrl] = useState<string>();

  const handleMediaChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMediaIsPending(true);
    const file = event.target.files![0];
    const buf = await resize(file, {
      width: 1080,
      height: 1080,
      fit: "contain",
    });
    const extension = (await getExtension(file)) as string;

    const blob = new Blob([buf]);
    const dataUrl = URL.createObjectURL(blob);
    setMediaDataUrl(dataUrl);

    setMedia({ buf, extension });
    setMediaIsPending(false);
  };

  return (
    <>
      <div className="flex flex-row-reverse">
        <Button onClick={dispatch} disabled={isPending} isPending={isPending}>
          投稿
          <LucideSend className="ms-1 inline-block" />
        </Button>
      </div>
      <div className="mb-4">
        <FormField
          id="description"
          label="本文"
          errors={state?.validationError?.description}
        >
          <Textarea
            name="description"
            id="description"
            placeholder="いまどうしてる？"
            autoFocus={true}
            rows={6}
            value={description}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(event.target.value)
            }
            error={state?.validationError?.description !== undefined}
          />
        </FormField>
      </div>
      {mediaDataUrl && (
        <Image
          src={mediaDataUrl}
          width={1080}
          height={1080}
          alt=""
          className="mb-4 rounded-xl"
        />
      )}
      <div className="mb-4">
        <InputButton
          type="file"
          accept="image/*"
          disabled={mediaIsPending}
          onChange={handleMediaChange}
          isPending={mediaIsPending}
          id="js-image-input"
          variants={{ outline: true, size: "sm" }}
        >
          <LucideImage className="inline-block" />
        </InputButton>
      </div>
    </>
  );
}
