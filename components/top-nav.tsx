"use client";

import { Sun, Languages, MenuIcon } from "lucide-react";
import { MoonIcon as Moon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Separator } from "./ui/separator";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full !bg-transparent hover:!bg-gray-700 dark:hover:!bg-gray-800"
    >
      <Sun
        size={48}
        className="h-12 w-12 rotate-0 scale-100 transition-all text-orange-300 dark:text-gray-100 dark:-rotate-90 dark:scale-0"
      />
      <Moon className="absolute h-12 w-12 rotate-90 scale-0 transition-all text-orange-300 dark:text-gray-100 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

const LanguageToggle = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Française" },
    { code: "de", name: "Deutsche Sprache" },
    { code: "pt", name: "Portuguesa" },
    { code: "ru", name: "Русский язык" },
    { code: "zh-CN", name: "中文（简体）" },
    { code: "zh-TW", name: "中文（繁體）" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "ar", name: "العربية" },
    { code: "he", name: "עברית" },
    { code: "vi", name: "Tiếng Việt" },
    { code: "uk", name: "Українська мова" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full !bg-transparent hover:!bg-gray-700 dark:hover:!bg-gray-800"
        >
          <Languages
            size={48}
            className="h-12 w-12 text-orange-300 dark:text-gray-100"
          />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setSelectedLanguage(language.name)}
            className={cn(
              "cursor-pointer",
              selectedLanguage === language.name && "bg-accent"
            )}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default function TopNav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/WinApps_Logo_Medium.webp"
            alt="WinApps Logo"
            className="hidden dark:block"
            width={56}
            height={56}
          />
          <Image
            src="/WinApps_Logo_Medium.webp"
            alt="WinApps Logo"
            className="block dark:hidden"
            width={56}
            height={56}
          />
          <span className="text-xl font-semibold text-white hidden md:block">
            WinApps
          </span>
        </Link>

        {/* Center Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white font-semibold bg-transparent hover:bg-white/10 focus:bg-white/10">
                Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Current Projects
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore my latest mobile apps and web applications.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/projects/journey-app"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Journey App
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Customized journaling app for iOS|Android|Web.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/projects/voizy"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Voizy
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Android social media app.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/projects/aspire-to-expand"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Aspire To Expand
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Educational language learning app with video
                          conferencing.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white font-semibold bg-transparent hover:bg-white/10 focus:bg-white/10">
                Portfolio
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/portfolio/amazon-connect"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Amazon Connect
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Customer Profiles service at Amazon Web Services
                          (frontend).
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/portfolio/vmware"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          VMware
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Software engineering work at VMware (backend).
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/portfolio/double-raven"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Double Raven Solutions
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Full-stack development work.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/portfolio"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          View All
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          See my complete portfolio and work history.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white font-semibold bg-transparent hover:bg-white/10 focus:bg-white/10">
                Blog
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/blog"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          All Posts
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Browse all my technical blog posts and tutorials.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="https://javascript.plainenglish.io/the-react-files-what-they-dont-want-you-to-know-318fb8b11374"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          The React Files: What{" "}
                          <span className="italic pr-1">&quot;They&quot;</span>{" "}
                          Don&apos;t Want You to Know
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          An entertaining and informative blog post about React
                          and what{" "}
                          <span className="italic">&quot;they&quot;</span>{" "}
                          don&apos;t want you to know.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="https://medium.com/@90mitchwintrow/11-javascript-power-ups-you-probably-arent-using-yet-and-how-they-ll-turbo-boost-your-code-718e52c670a7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          11 JavaScript Power-Ups You Probably Aren&apos;t Using
                          (Yet)
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Discover advanced JavaScript features and techniques
                          that can supercharge your code.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="https://medium.com/@90mitchwintrow/optimize-your-multimedia-and-make-your-readmes-pop-on-github-866a018c1e13"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Optimize Your Multimedia and Make Your READMEs Pop on
                          GitHub
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Learn how to create engaging GitHub READMEs with
                          optimized multimedia content.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="text-white font-semibold bg-transparent hover:bg-white/10 focus:bg-white/10 px-4 py-2 rounded-md transition-colors"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger className="md:hidden" asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-12 w-12 text-orange-300 dark:text-gray-100" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex justify-center text-2xl font-bold">
                Menu
              </SheetTitle>
            </SheetHeader>
            <SheetDescription className="text-center">
              Site navigation menu.
            </SheetDescription>
            <Separator className="w-full" />
            <div className="flex flex-col gap-2 p-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="projects">
                  <AccordionTrigger className="text-lg font-bold pl-2">
                    <span className="bg-gradient-to-b from-purple-300 dark:from-orange-300 to-purple-900 dark:to-orange-900 bg-clip-text text-transparent">
                      Projects
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Current Projects
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore my latest mobile apps and web applications.
                        </p>
                      </Link>
                      <Link
                        href="/projects/journey-app"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Journey App
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Customized journaling app for iOS|Android|Web.
                        </p>
                      </Link>
                      <Link
                        href="/projects/voizy"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Voizy
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Android social media app.
                        </p>
                      </Link>
                      <Link
                        href="/projects/aspire-to-expand"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Aspire To Expand
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Educational language learning app with video
                          conferencing.
                        </p>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="portfolio">
                  <AccordionTrigger className="text-lg font-bold pl-2">
                    <span className="bg-gradient-to-b from-purple-300 dark:from-orange-300 to-purple-900 dark:to-orange-900 bg-clip-text text-transparent">
                      Portfolio
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/portfolio/amazon-connect"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Amazon Connect
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Customer Profiles service at Amazon Web Services
                          (frontend).
                        </p>
                      </Link>
                      <Link
                        href="/portfolio/vmware"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          VMware
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Software engineering work at VMware (backend).
                        </p>
                      </Link>
                      <Link
                        href="/portfolio/double-raven"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Double Raven Solutions
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Full-stack development work.
                        </p>
                      </Link>
                      <Link
                        href="/portfolio"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          View All
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          See my complete portfolio and work history.
                        </p>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="blog">
                  <AccordionTrigger className="text-lg font-bold pl-2">
                    <span className="bg-gradient-to-b from-purple-300 dark:from-orange-300 to-purple-900 dark:to-orange-900 bg-clip-text text-transparent">
                      Blog
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/blog"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          All Posts
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Browse all my technical blog posts and tutorials.
                        </p>
                      </Link>
                      <Link
                        href="https://javascript.plainenglish.io/the-react-files-what-they-dont-want-you-to-know-318fb8b11374"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          The React Files: What{" "}
                          <span className="italic pr-1">&quot;They&quot;</span>{" "}
                          Don&apos;t Want You to Know
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          An entertaining and informative blog post about React
                          and what{" "}
                          <span className="italic">&quot;they&quot;</span>{" "}
                          don&apos;t want you to know.
                        </p>
                      </Link>
                      <Link
                        href="https://medium.com/@90mitchwintrow/11-javascript-power-ups-you-probably-arent-using-yet-and-how-they-ll-turbo-boost-your-code-718e52c670a7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          11 JavaScript Power-Ups You Probably Aren&apos;t Using
                          (Yet)
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Discover advanced JavaScript features and techniques
                          that can supercharge your code.
                        </p>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="about">
                  <AccordionTrigger className="text-lg font-bold pl-2">
                    <span className="bg-gradient-to-b from-purple-300 dark:from-orange-300 to-purple-900 dark:to-orange-900 bg-clip-text text-transparent">
                      About
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/about"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          About Me
                        </div>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>

        {/* Right side controls */}
        <div className="flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
