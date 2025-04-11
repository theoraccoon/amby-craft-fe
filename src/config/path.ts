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
        getHref: () => '/about',  // Remove '/app' to resolve correctly
      },
    },
    
    public: {
      // Your public paths here
    },
  } as const;
  