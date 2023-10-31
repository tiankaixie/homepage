import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons, generateIcon } from "@/components/icons"

import { buttonVariants } from "./ui/button"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="">
      {items?.length ? (
        <nav className="flex flex-col gap-1">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex w-full justify-start text-primary-foreground opacity-80"
                  )}
                >
                  <div
                    className={buttonVariants({
                      size: "sm",
                      variant: "nav",
                    })}
                  >
                    {generateIcon(item.title)}
                    <span className="ml-3 text-xs">{item.title}</span>
                  </div>
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
