import { Toaster } from "@/components/ui/sonner"
import { Instrument_Sans } from 'next/font/google';
import { ThemeProvider } from "next-themes"
import { usePathname } from 'next/navigation';
import "./globals.css"

import { Footer } from '@/components/footer';
import { MenuBar } from '@/components/menu-bar';

const instrumentSans = Instrument_Sans({
    subsets: ['latin'],
    variable: '--font-instrument-sans',
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const path = usePathname().split('/')[1] || ''; // Default to home if no path is present
  
  return (
    <html lang="en" suppressHydrationWarning className={instrumentSans.className}>
      <body>
        <ThemeProvider attribute="class" forcedTheme="dark">
          <div className="flex flex-col h-screen w-screen bg-background overflow-hidden relative">
            <MenuBar />
            <div className="flex-1 flex flex-col w-full overflow-y-auto relative">
              {children}
            </div>
            <Footer className="w-full bg-background z-50 shrink-0" />
          </div>
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
