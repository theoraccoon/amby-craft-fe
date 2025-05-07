'use client'

import LoginForm from '@/features/auth/_components/login-form'
import AuthLayout from '../auth_layout/auth-layout'

export default function Page() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}
