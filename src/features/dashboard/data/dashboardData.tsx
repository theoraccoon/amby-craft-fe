import { DashboardData } from '../types/type'
import { Icon } from '@chakra-ui/react'
import { BiBook, BiBookOpen, BiBox } from 'react-icons/bi'

import { Course } from '@/types'

export const dashboardData: DashboardData[] = [
  {
    id: 'dashboard',
    text: 'Total Courses',
    count: 25,
    IconComponent: <Icon as={BiBookOpen} color={'#F8AF43'} />,
    borderStyle: '#F8AF43',
    backgroundStyle: '#F8AF4326',
    curvesColor: '#F8AF43',
    borderColor: '#F8AF4326',
  },
  {
    id: 'courses',
    text: 'Total Microlearning',
    count: 4,
    IconComponent: <Icon as={BiBook} color={'#F8AF43'} />,
    borderStyle: '#9747FF',
    backgroundStyle: '#9747FF26',
    curvesColor: '#9747FF',
    borderColor: '#9747FF26',
  },
  {
    id: 'microlearning',
    text: 'Total Question Bank',
    count: 24,
    IconComponent: <Icon as={BiBox} color={'#F8AF43'} />,
    borderStyle: '#00BA7F',
    backgroundStyle: '#00BA7F26',
    curvesColor: '#00BA7F',
    borderColor: '#00BA7F26',
  },
  {
    id: 'micreolearning',
    text: 'Total Question Bank',
    count: 18,
    IconComponent: <Icon as={BiBox} color={'#F8AF43'} />, // changed this line
    borderStyle: '#00BA7F',
    backgroundStyle: '#00BA7F26',
    curvesColor: '#00BA7F',
    borderColor: '#00BA7F26',
  },
  {
    id: 'micerolearning',
    text: 'Total Question Bank',
    count: 19,
    IconComponent: <Icon as={BiBox} color={'#F8AF43'} />, // changed this line
    borderStyle: '#00BA7F',
    backgroundStyle: '#00BA7F26',
    curvesColor: '#00BA7F',
    borderColor: '#00BA7F26',
  },
]

export const courseItems: Course[] = [
  {
    imageUrl: '/images/course-thumb-1.png',
    title: 'Time management and Impact on Work',
    description: 'Office ipsum squad circle no innovation while pretend synergize disband...',
    instructor: 'Desmond Essuman',
    lessonsCount: 22,
    date: '18/04/25',
  },
  {
    imageUrl: '/images/course-thumb-1.png',
    title: 'Content Management Systems',
    description: 'Office ipsum squad circle no innovation while pretend synergize disband...',
    instructor: 'Desmond Essuman',
    lessonsCount: 22,
    date: '18/04/25',
  },
  {
    imageUrl: '/images/course-thumb-1.png',
    title: 'Design for inclusivity and Design Systems',
    description: 'Office ipsum squad circle no innovation while pretend synergize disband...',
    instructor: 'Desmond Essuman',
    lessonsCount: 22,
    date: '18/04/25',
  },
  {
    imageUrl: '/images/course-thumb-1.png',
    title: 'Design for inclusivity and Design Systems',
    description: 'Office ipsum squad circle no innovation while pretend synergize disband...',
    instructor: 'Desmond Essuman',
    lessonsCount: 22,
    date: '18/04/25',
  },
]
