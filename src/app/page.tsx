// app/page.tsx

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LoginPage from './auth/login/page'

export default function HomePage() {
  const [authChecked, setAuthChecked] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = checkAuthentication()
    if (auth) {
      setIsAuth(true)
      router.replace('/dashboard')
    } else {
      setIsAuth(false)
    }
    setAuthChecked(true)
  }, [router])

  if (!authChecked) {
    return null
  }

  return <LoginPage />
}

function checkAuthentication(): boolean {
  return true
}
