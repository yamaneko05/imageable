"use server";

import { signinSchema, signupSchema } from "@/schema";
import { createClient } from "@/utils/supabase/server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signup(_prevState: any, formData: FormData) {
  const supabase = await createClient();
  const prisma = new PrismaClient();

  const old = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    password_confirm: formData.get("password_confirm") as string,
  };

  const validationResult = signupSchema.safeParse(old);

  if (validationResult.success) {
    const { error, data } = await supabase.auth.signUp(validationResult.data);
    if (error) {
      return { serverError: error };
    }

    await prisma.user.create({
      data: {
        authId: data.user!.id,
      },
    });
  } else {
    return {
      validationError: validationResult.error.flatten().fieldErrors,
      old: old,
    };
  }

  redirect(`/signup/confirm-your-email?email=${old.email}`);
  // redirect("/signup/create-profile");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signin(_prevState: any, formData: FormData) {
  const supabase = await createClient();

  const old = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationResult = signinSchema.safeParse(old);

  if (validationResult.success) {
    const { error } = await supabase.auth.signInWithPassword(
      validationResult.data,
    );
    if (error) {
      return { serverError: error };
    }
  } else {
    return {
      validationError: validationResult.error.flatten().fieldErrors,
      old: old,
    };
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
