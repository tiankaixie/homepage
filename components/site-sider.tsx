import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteSider() {
  return (
    <div className="fixed h-[calc(100vh-1rem)]  w-56 bg-primary flex flex-col top-0 m-2 p-2  ">
      <div className="">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Icons.logo className="h-6 w-6" /> */}
          <span className="inline-block font-serif italic text-2xl text-primary-foreground mb-5 ml-3">
            {siteConfig.name}
          </span>
        </Link>
        <MainNav items={siteConfig.mainNav} />
        <div className="text-xs font-semibold mt-4 mb-2 ml-2">Contact</div>
        <MainNav items={siteConfig.socialNav} />
      </div>
    </div>
  )
}
