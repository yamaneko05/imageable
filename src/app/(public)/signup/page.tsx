"use client";

import { signup } from "@/actions/auth";
import SignUpStepper from "@/components/features/auth/SignUpStepper";
import { Alert, Button, FormField, Input } from "@/components/ui";
import ToggleShowPasswordButton from "@/components/ui/ToggleShowPasswordButton";
import Link from "next/link";
import { useActionState, useState } from "react";

export default function SignUpPage() {
  const [state, dispatch, isPending] = useActionState(signup, undefined);

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="w-96 px-3">
      <div className="mb-8 text-center text-2xl font-bold">新規登録</div>
      {state?.serverError && (
        <Alert variants={{ color: "danger" }}>
          {state.serverError.message}
        </Alert>
      )}
      <SignUpStepper doing={0} />
      <form className="mb-6" action={dispatch}>
        <div className="mb-6">
          <FormField
            id="email"
            label="メールアドレス"
            errors={state?.validationError?.email}
          >
            <Input
              type="email"
              name="email"
              id="email"
              defaultValue={state?.old?.email}
              error={state?.validationError?.email !== undefined}
            />
          </FormField>
        </div>
        <div className="mb-6">
          <FormField
            id="password"
            label="パスワード"
            errors={state?.validationError?.password}
          >
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                defaultValue={state?.old?.password}
                error={state?.validationError?.password !== undefined}
              />
              <ToggleShowPasswordButton
                toggleShowPassword={toggleShowPassword}
                showPassword={showPassword}
              />
            </div>
          </FormField>
        </div>
        <div className="mb-8">
          <FormField
            id="password_confirm"
            label="パスワード（再入力）"
            errors={state?.validationError?.password_confirm}
          >
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password_confirm"
                id="password_confirm"
                defaultValue={state?.old?.password_confirm}
                error={state?.validationError?.password_confirm !== undefined}
              />
              <ToggleShowPasswordButton
                toggleShowPassword={toggleShowPassword}
                showPassword={showPassword}
              />
            </div>
          </FormField>
        </div>
        <Button
          type="submit"
          disabled={isPending}
          variants={{ color: "success", WidthFull: true }}
          isPending={isPending}
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
