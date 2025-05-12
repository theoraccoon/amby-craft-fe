'use client'

import SharedLayout from '@/components/layout/shared/layout'
import Dashboard from '@/features/dashboard/dashboard'
import React from 'react'

export default function DashboardPage() {
  return (
    <SharedLayout>
      <Dashboard />
    </SharedLayout>
  )
}
