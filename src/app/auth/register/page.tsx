"use client";

import SignUpForm from "@/features/auth/_components/sign-up-form";
import AuthLayout from "../auth_layout/auth-layout";

export default function Page() {
  return(
    <AuthLayout>
      <SignUpForm />;
    </AuthLayout>
  )
}
