
  export const folders = [
    
    {
      title: "Software Engineering",
      courses: [
        {
          title: "React Basics",
          description: "Learn the fundamentals of React.",
          imageUrl: "/images/course-thumb-1.png",
          instructor: "Jane Doe",
          initials: "JD",
          lessonsCount: 15,
          date: "20 April, 2025"
        },
        {
          title: "React Basics",
          description: "Learn the fundamentals of React.",
          imageUrl: "/images/course-thumb-2.png",
          instructor: "Jane Doe",
          initials: "JD",
          lessonsCount: 15,
          date: "20 April, 2025"
        },
        {
          title: "React Basics",
          description: "Learn the fundamentals of React.",
          imageUrl: "/images/course-thumb-1.png",
          instructor: "Jane Doe",
          initials: "JD",
          lessonsCount: 15,
          date: "20 April, 2025"
        },
        {
          title: "React Basics",
          description: "Learn the fundamentals of React.",
          imageUrl: "/images/course-thumb-2.png",
          instructor: "Jane Doe",
          initials: "JD",
          lessonsCount: 15,
          date: "20 April, 2025"
        }
      ],
      children: [
        {
          title: "Frontend",
          courses: [
            {
              title: "React Basics",
              description: "Learn the fundamentals of React.",
              imageUrl: "/images/course-thumb-1.png",
              instructor: "Jane Doe",
              initials: "JD",
              lessonsCount: 15,
              date: "20 April, 2025"
            }
          ]
        },
        {
          title: "Backend",
          courses: []
        }
      ]
    },
    {
      title: "Marketing",
      courses: []
    },
    {
      title: "Figma",
      courses: []
    },
    {
      title: "Typography",
      courses: []
    }
  ];
  

  const foldersWithBadgeCount = folders.map(folder => ({
    ...folder,
    badgeCount: folder.children ? folder.children.length : 0
  }));
  
  export default foldersWithBadgeCount;