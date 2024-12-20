"use client";

import { getExtension, resize } from "@/actions/image";
import { createPostAction } from "@/actions/post";
import { Avatar, Button, InputButton, Textarea } from "@/components/ui";
import { LucideImage, LucideSend } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function CreatePostForm({ image }: { image: string | null }) {
  const router = useRouter();

  const [state, setState] =
    useState<Awaited<ReturnType<typeof createPostAction>>>();
  const [isPending, setIsPending] = useState(false);

  const [description, setDescription] = useState<string>();

  const dispatch = async () => {
    setIsPending(true);

    const newState = await createPostAction(description!, media);

    if (newState.success) {
      router.back();
    }

    setState(newState);
    setIsPending(false);
  };

  const [media, setMedia] = useState<{ buf: Buffer; extension: string }>();
  const [mediaIsPending, setMediaIsPending] = useState(false);

  const [mediaDataUrl, setMediaDataUrl] = useState<string>();

  const [uploadError, setUploadError] = useState<string>();

  const handleMediaChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMediaIsPending(true);
    const file = event.target.files![0];
    if (file.size > 1024 * 1024) {
      setUploadError("1MB以上の画像は投稿できません");
      setMediaIsPending(false);
      return;
    }
    const buf = await resize(file, {
      width: 1080,
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
      <div className="flex gap-2">
        <div className="pt-2">
          <div className="h-10 w-10">
            <Avatar image={image} />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-4">
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
            {state?.validationError?.description && (
              <div className="text-sm text-red-500">
                {state?.validationError?.description}
              </div>
            )}
          </div>
          {uploadError && (
            <div className="mb-2 text-red-500">エラー: {uploadError}</div>
          )}
          {mediaDataUrl && (
            <Image
              src={mediaDataUrl}
              width={1080}
              height={1080}
              alt=""
              className="mb-4 rounded-lg"
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
              variants={{ variant: "ghost", size: "sm" }}
            >
              <LucideImage className="inline-block" />
            </InputButton>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-row-reverse">
        <Button onClick={dispatch} disabled={isPending} isPending={isPending}>
          投稿
          <LucideSend className="ms-1 inline-block" size={18} />
        </Button>
      </div>
    </>
  );
}
