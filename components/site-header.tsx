"use client"

import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { HorizontalNav } from "./horizontal-nav"
import { SocialNav } from "./social-nav"

export function NavigationMenuHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Icons.menu className="h-4 w-4 rotate-0 scale-100 " />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[200px] p-2">
              <MainNav items={siteConfig.mainNav} />
              <div className="mb-2 ml-2 mt-4 text-xs font-semibold">
                Contact
              </div>
              <MainNav items={siteConfig.socialNav} />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="flex justify-between px-2">
        <Link href="/" className="flex items-center space-x-2">
          <span className=" mb-2 ml-4 mt-3 inline-block font-light text-primary-foreground">
            {siteConfig.name}
          </span>
        </Link>
        <div className="lg:hidden">
          <NavigationMenuHeader />
        </div>
        <div className="hidden lg:block">
          <HorizontalNav items={siteConfig.horizonalNav} />
        </div>
      </div>
    </header>
  )
}
