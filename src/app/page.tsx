export { default } from '../app/auth/login/page'

// We’re simply re-exporting the real LoginPage here.
// If you ever want to simulate server-side redirect logic on the client,
// you can uncomment the block below to check auth and push to /dashboard.

// 'use client'

// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import LoginPage from './auth/login/page'

// export default function HomePage() {
//   const [authChecked, setAuthChecked] = useState(false)
//   const [isAuth, setIsAuth] = useState(false)
//   const router = useRouter()

//   useEffect(() => {
//     const auth = checkAuthentication()
//     if (auth) {
//       setIsAuth(true)
//       router.replace('/dashboard')
//     } else {
//       setIsAuth(false)
//     }
//     setAuthChecked(true)
//   }, [router])

//   if (!authChecked) {
//     return null
//   }

//   return <LoginPage />
// }

// function checkAuthentication(): boolean {
//   return true
// }
