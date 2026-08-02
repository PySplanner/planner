import { Toaster } from "@/components/ui/sonner"
import { Instrument_Sans } from 'next/font/google';
import { ThemeProvider } from "next-themes"
import "./globals.css"

import { Footer } from '@/components/footer';
import { MenuBar } from '@/components/menu-bar';

const instrumentSans = Instrument_Sans({
    subsets: ['latin'],
    variable: '--font-instrument-sans',
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning className={instrumentSans.className}>
      <body>
        <ThemeProvider attribute="class" forcedTheme="dark">
          <div className="flex flex-col h-screen w-screen bg-background overflow-hidden overflow-y-auto relative">
            {children}
          </div>
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
