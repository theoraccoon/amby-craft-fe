import "../styles/global.css"
import { paths } from "@/config/path";
import Head from 'next/head';

import { Providers } from './provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {

  console.log(paths,"ldld")
  return (
    <html lang="en">
      <head>
        {/* Global Head Settings (can also include meta tags, links to fonts, etc.) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
      >
       <Providers>{children}</Providers>
      </body>
    </html>
  );
}
