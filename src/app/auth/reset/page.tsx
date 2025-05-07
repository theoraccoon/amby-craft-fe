'use client'

import ResetPasswordForm from '@/features/auth/_components/reset-password-form'
import AuthLayout from '../auth_layout/auth-layout'

export default function Page() {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  )
}
