'use client'

import AuthLayout from '../auth_layout/auth-layout'

import SignUpForm from '@/features/auth/_components/sign-up-form'

export default function Page() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  )
}
