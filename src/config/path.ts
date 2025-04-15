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
        getHref: () => '/app',
      },
      about: {
        getHref: () => 'app/about',  // Remove '/app' to resolve correctly
      },
      
    dashboard: {
      getHref: () => '/app/dashboard',
    },
      
    },
    
    public: {
      // Your public paths here
    },
  } as const;
  