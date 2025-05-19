'use client'

import AuthLayout from '../auth_layout/auth-layout'

import ResetPasswordForm from '@/features/auth/_components/reset-password-form'

export default function Page() {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  )
}
