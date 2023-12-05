"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { generateIcon, Icons } from "@/components/icons"

import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"

interface HorizontalNavProps {
  items?: NavItem[]
}

export function HorizontalNav({ items }: HorizontalNavProps) {
  const pathname = usePathname()
  return (
    <div className=" mr-3 mt-3 ">
      {items?.length ? (
        <nav className="flex flex-row gap-1">
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
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "link",
                      }),
                      `${pathname === item.href ? "" : ""}`
                    )}
                  >
                    <span className="ml-3 text-sm font-light text-foreground ">
                      {item.title.toUpperCase()}
                    </span>
                  </div>
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
