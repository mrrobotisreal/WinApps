"use client";

import { MenuIcon, Sun } from "lucide-react";
import { MoonIcon as Moon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

const { labels } = site.copy;

const itemClass =
  "block select-none rounded-md p-3 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";
const topLinkClass =
  "text-white font-semibold bg-transparent hover:bg-white/10 focus:bg-white/10 px-4 py-2 rounded-md transition-colors";
const gradientLabel =
  "bg-gradient-to-b from-purple-300 dark:from-orange-300 to-purple-900 dark:to-orange-900 bg-clip-text text-transparent";

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="rounded-full !bg-transparent hover:!bg-gray-700 dark:hover:!bg-gray-800"
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all text-orange-300 dark:text-gray-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all text-orange-300 dark:text-gray-100 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">{labels.toggleTheme}</span>
    </Button>
  );
}

export default function TopNav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <Image src="/WinApps_Icon.webp" alt={site.siteName} width={56} height={56} priority />
          <span className="hidden text-xl font-semibold text-white md:block">{site.footer.copyrightHolder}</span>
        </Link>

        <NavigationMenu className="hidden md:block" viewport={false}>
          <NavigationMenuList>
            {site.nav.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger className="bg-transparent font-semibold text-white hover:bg-white/10 focus:bg-white/10">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[260px] gap-1 p-2">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <NavigationMenuLink asChild>
                            <Link href={child.href} className={itemClass}>
                              {child.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href} className={topLinkClass}>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <a href={profile.resume.pdf} className={`${topLinkClass} hidden md:inline-block`} download>
            {labels.resume}
          </a>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger className="md:hidden" asChild>
              <Button variant="ghost" size="icon" aria-label={labels.openMenu}>
                <MenuIcon className="h-8 w-8 text-orange-300 dark:text-gray-100" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="flex justify-center text-2xl font-bold">{labels.menu}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 p-2">
                <Accordion type="single" collapsible className="w-full">
                  {site.nav
                    .filter((item) => item.children)
                    .map((item) => (
                      <AccordionItem key={item.label} value={item.label}>
                        <AccordionTrigger className="pl-2 text-lg font-bold">
                          <span className={gradientLabel}>{item.label}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-1">
                            {item.children!.map((child) => (
                              <li key={child.href + child.label}>
                                <Link href={child.href} className={itemClass}>
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
                {site.nav
                  .filter((item) => !item.children)
                  .map((item) => (
                    <Link key={item.label} href={item.href} className={`${itemClass} text-lg font-bold`}>
                      <span className={gradientLabel}>{item.label}</span>
                    </Link>
                  ))}
                <a href={profile.resume.pdf} className={`${itemClass} text-lg font-bold`} download>
                  <span className={gradientLabel}>{labels.resume}</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
