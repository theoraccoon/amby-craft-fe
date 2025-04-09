'use client';
import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/themes/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; 

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
