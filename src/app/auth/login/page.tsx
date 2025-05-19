'use client'

import AuthLayout from '../auth_layout/auth-layout'

import LoginForm from '@/features/auth/_components/login-form'

export default function Page() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}
