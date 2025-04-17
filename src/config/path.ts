'use client';

export const paths = {
    home: {
      getHref: () => '/',
    },
  
    auth: {
      login: {
        getHref: () => "/auth/login",
      },
    },
    
    app: {
      root: {
        getHref: () => '/',
      },
      about: {
        getHref: () => '/about',
      },
      
    dashboard: {
      getHref: () => '/dashboard',
    },

    courses: {
      getHref: () => '/courses',
    },
      
    },
    
    public: {
      // Your public paths here
    },
  } as const;
  