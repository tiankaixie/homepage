import "@/styles/globals.css"

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { FixedThemeToggle } from "@/components/fixed-theme-toggle"
import { SiteHeader } from "@/components/site-header"
import { SiteSider } from "@/components/site-sider"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <Background /> */}
          <SiteHeader />
          {/* <SiteSider /> */}
          <div className="relative flex h-[calc(100vh-3rem)] flex-col overflow-auto rounded-md bg-background shadow-sm ">
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
          <FixedThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
