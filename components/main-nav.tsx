"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { generateIcon, Icons } from "@/components/icons"

import { buttonVariants } from "./ui/button"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  return (
    <>
      {items?.length ? (
        <>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      buttonVariants({
                        size: "xs",
                        variant: "link",
                      }),
                      `${
                        pathname === item.href ? "" : ""
                      }`
                    )}
                  >
                    {item.title}
                  </div>
                </Link>
              )
          )}
        </>
      ) : null}
    </>
  )
}
