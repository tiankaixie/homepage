"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { generateIcon, Icons } from "@/components/icons"

import { buttonVariants } from "./ui/button"

interface SocialNavProps {
  items?: NavItem[]
}

export function SocialNav({ items }: SocialNavProps) {
  const pathname = usePathname()
  return (
    <div className="">
      {items?.length ? (
        <nav className="flex justify-center gap-1">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    " justify-start text-primary-foreground opacity-80"
                  )}
                >
                  <div
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "nav",
                      }),
                      `${
                        pathname === item.href ? "bg-highlight shadow-md" : ""
                      }`
                    )}
                  >
                    {generateIcon(item.title)}
                  </div>
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
