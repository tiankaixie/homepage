"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="link"
      size="xs"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div className="dark:hidden">Night</div>
      <div className="hidden dark:block">Light</div>
    </Button>
  )
}
