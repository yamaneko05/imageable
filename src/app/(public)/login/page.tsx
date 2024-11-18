"use client";

import { signin } from "@/actions/auth";
import { Alert, Button, Input, FormField } from "@/components/ui";
import ToggleShowPasswordButton from "@/components/ui/ToggleShowPasswordButton";
import Link from "next/link";

import { useActionState, useState } from "react";

export default function LoginPage() {
  const [state, dispatch, isPending] = useActionState(signin, undefined);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="w-96 px-3">
      <div className="mb-8 text-center text-2xl font-bold">ログイン</div>
      {state?.serverError && (
        <Alert variants={{ color: "danger" }}>
          {state.serverError.message}
        </Alert>
      )}
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
        <div className="mb-8">
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
        <Button
          type="submit"
          disabled={isPending}
          variants={{ WidthFull: true }}
          isPending={isPending}
        >
          ログイン
        </Button>
      </form>
      <p>
        アカウントをお持ちでない方は
        <Link href="/signup" className="px-1 text-blue-500">
          新規登録
        </Link>
      </p>
    </div>
  );
}
