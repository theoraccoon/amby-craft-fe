export * from './text-icon';

export type Course = {
    title: string;
    description: string;
    imageUrl: string;
    instructor: string;
    initials: string;
    lessonsCount: number;
    date: string;
  };
  
  export type Folder = {
    title?: string;
    badgeCount?: number;
    children?: Folder[];
    courses?: Course[];
  };