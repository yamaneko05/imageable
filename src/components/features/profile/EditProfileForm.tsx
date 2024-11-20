"use client";

import { Profile } from "@prisma/client";
import {
  Alert,
  Button,
  FormField,
  FormLabel,
  Input,
  Textarea,
} from "@/components/ui";
import { useActionState } from "react";
import { update } from "@/actions/profile";

export default function EditProfileForm({ profile }: { profile: Profile }) {
  const [state, dispatch, isPending] = useActionState(update, undefined);

  return (
    <>
      <form action={dispatch}>
        <div className="mb-6">
          <FormField
            id="name"
            label="ユーザー名"
            errors={state?.validationError?.name}
          >
            <Input
              type="text"
              name="name"
              id="name"
              defaultValue={state?.old?.name ?? profile.name}
              error={state?.validationError?.name !== undefined}
            />
          </FormField>
        </div>
        <div className="mb-8">
          <FormField
            id="description"
            label="プロフィール文"
            errors={state?.validationError?.description}
          >
            <Textarea
              name="description"
              id="description"
              placeholder="いまどうしてる？"
              rows={6}
              defaultValue={
                state?.old?.description ?? profile.description ?? ""
              }
              error={state?.validationError?.description !== undefined}
            />
          </FormField>
        </div>
        <Button
          type="submit"
          disabled={isPending}
          variants={{ WidthFull: true }}
          isPending={isPending}
        >
          保存
        </Button>
      </form>
    </>
  );
}
