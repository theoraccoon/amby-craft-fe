'use client'

import React from 'react'

import SharedLayout from '@/components/layout/shared/layout'
import Dashboard from '@/features/dashboard/dashboard'

export default function DashboardPage() {
  return (
    <SharedLayout>
      <Dashboard />
    </SharedLayout>
  )
}
