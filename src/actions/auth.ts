"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signup(_prevState: any, formData: FormData) {
  const supabase = await createClient();

  const credentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    password_confirm: formData.get("password_confirm") as string,
  };

  if (credentials.password !== credentials.password_confirm) {
    return { error: { message: "パスワードの再入力が一致しません" } };
  }

  const { error } = await supabase.auth.signUp(credentials);

  if (error) {
    return { error: error };
  }

  redirect("/signup/confirm-your-email");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signin(_prevState: any, formData: FormData) {
  const supabase = await createClient();

  const credentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    return { error: error };
  }

  redirect("/timeline");
}

export async function signout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  redirect("/login");
}
