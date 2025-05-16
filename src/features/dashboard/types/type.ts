import { JSX } from 'react'


export interface DashboardData {
  id: string
  text: string
  count: number
  IconComponent: JSX.Element // changed this line
  borderStyle: string
  backgroundStyle: string
  curvesColor: string
  borderColor: string
}

export interface Course {
  imageUrl: string
  title: string
  description: string
  author: string
  lessonsCount: number
  date: string
}

export interface ToolbarItem {
   type: string,
    icon: JSX.Element 
    label: string 
    modal?: boolean

}