import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteSider() {
  return (
    <div className="fixed top-0 m-2 flex h-[calc(100vh-1rem)] w-56 flex-col  justify-between bg-primary p-2  ">
      <div className="">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Icons.logo className="h-6 w-6" /> */}
          <span className="mb-5 ml-3 inline-block font-serif text-2xl italic text-primary-foreground">
            {siteConfig.name}
          </span>
        </Link>
        <MainNav items={siteConfig.mainNav} />
        <div className="mb-2 ml-2 mt-4 text-xs font-semibold">Contact</div>
        <MainNav items={siteConfig.socialNav} />
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  )
}
