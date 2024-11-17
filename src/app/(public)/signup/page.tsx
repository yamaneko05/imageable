"use client";

import { signup } from "@/actions/auth";
import { Alert, Button, FormField } from "@/components/ui";
import Link from "next/link";
import { useActionState } from "react";

export default function SignUpPage() {
  const [state, dispatch, isPending] = useActionState(signup, undefined);

  return (
    <div className="w-96 px-3">
      <div className="mb-8 text-center text-2xl font-bold">新規登録</div>
      {state?.serverError && (
        <Alert variants={{ color: "danger" }}>
          {state.serverError.message}
        </Alert>
      )}
      <form className="mb-6">
        <div className="mb-6">
          <FormField
            id="email"
            label="メールアドレス"
            name="email"
            defaultValue={state?.old?.email}
            errors={state?.validationError?.email}
          />
        </div>
        <div className="mb-6">
          <FormField
            id="password"
            label="パスワード"
            type="password"
            name="password"
            defaultValue={state?.old?.password}
            errors={state?.validationError?.password}
          />
        </div>
        <div className="mb-8">
          <FormField
            id="password_confirm"
            label="パスワード（再入力）"
            type="password"
            name="password_confirm"
            defaultValue={state?.old?.password_confirm}
            errors={state?.validationError?.password_confirm}
          />
        </div>
        <Button
          attributes={{
            type: "submit",
            formAction: dispatch,
            disabled: isPending,
          }}
          variants={{ color: "success", WidthFull: true }}
        >
          新規登録
        </Button>
      </form>
      <p>
        アカウントを既にお持ちの方は
        <Link href="/login" className="px-1 text-blue-500">
          ログイン
        </Link>
      </p>
    </div>
  );
}
