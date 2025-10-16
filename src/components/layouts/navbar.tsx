"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { projects } from "@/data/data";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Dashboard",
      description: "Overview of your activity",
      href: "#",
    },
    {
      title: "Analytics",
      description: "Track your performance",
      href: "#",
    },
    {
      title: "Settings",
      description: "Configure your preferences",
      href: "#",
    },
    {
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    {
      title: "Storage",
      description: "Manage your files",
      href: "#",
    },
    {
      title: "Support",
      description: "Get help when needed",
      href: "#",
    },
    {
      title: "Security",
      description: "Protect your data",
      href: "#",
    },
    {
      title: "Collaboration",
      description: "Work with your team",
      href: "#",
    },
  ];

  return (
    <section
      className={cn(
        "top-0 left-0 py-3 sm:py-4 px-2 sm:px-4 w-full justify-center items-center flex transition-all duration-300",
        isScrolled
          ? "fixed z-50 bg-background backdrop-blur-md shadow-md"
          : "absolute z-10 bg-transparent",
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link href="#" className="">
            <Tooltip>
              <TooltipTrigger className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                <Image
                  width={32}
                  height={32}
                  src="/pic-croped.png"
                  className="max-h-6 sm:max-h-8 w-auto"
                  alt="PIC Logo"
                />
                <span className="text-sm sm:text-base lg:text-lg font-semibold tracking-tighter">
                  Partner In Code
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Your Tech Partner</p>
              </TooltipContent>
            </Tooltip>
          </Link>
          <NavigationMenu className="[&_div.absolute]:-left-[9rem] [&_div.absolute]:top-12 hidden lg:block z-10">
            <h1 className="sr-only">Main Navigation</h1>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Produk & Layanan</NavigationMenuTrigger>
                <NavigationMenuContent className="left-0 w-auto">
                  <h2 className="text-xl pl-4 pt-2 text-foreground mb-1 font-semibold">
                    Produk & Layanan
                  </h2>
                  <div className="grid grid-cols-3 gap-3 min-w-[900px] max-w-[800px] p-4 overflow-x-auto max-h-[300px] ">
                    {projects.slice(0, 9).map((project, index) => (
                      <NavigationMenuLink
                        href={project.link}
                        key={Number(index)}
                        className="hover:bg-muted/70 hover:border hover:border-[#21b6fc] rounded-md p-3 transition-colors"
                      >
                        <div>
                          <p className="text-foreground mb-1 font-semibold">
                            {project.title}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {project.summary}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className={navigationMenuTriggerStyle()}
                >
                  Tentang Kami
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#projects"
                  className={navigationMenuTriggerStyle()}
                >
                  Portfolio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={navigationMenuTriggerStyle()}
                >
                  Kontak Kami
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-2 sm:gap-4 lg:flex">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() =>
                    window.open("https://wa.me/6281234567890", "_blank")
                  }
                  className="text-sm sm:text-base px-3 sm:px-4 py-2 border-none cursor-pointer"
                >
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <Image
                      src={"/icons/whatsapp-ico.svg"}
                      height={16}
                      width={16}
                      alt="whatsapp icon"
                      className="sm:h-5 sm:w-5"
                    />
                    <span className="sr-only">Chat with us on WhatsApp</span>
                    <span className="hidden sm:inline">Hubungi Kami</span>
                    <span className="sm:hidden">Hubungi</span>
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Chat with us on WhatsApp</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* mobile */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10"
              >
                <MenuIcon className="h-4 w-4 sm:h-5 sm:h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
                    <Image
                      src="/pic-croped.png"
                      width={28}
                      height={28}
                      className="max-h-7 sm:max-h-8 w-auto"
                      alt="PIC Logo"
                    />
                    <span className="text-base sm:text-lg font-semibold tracking-tighter">
                      Partner In Code
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-3 sm:p-4">
                <Accordion
                  type="single"
                  collapsible
                  className="mb-2 mt-3 sm:mt-4"
                >
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-sm sm:text-base hover:no-underline py-3">
                      Produk & Layanan
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {features.map((feature, index) => (
                          <a
                            href={feature.href}
                            key={Number(index)}
                            className="hover:bg-muted/70 rounded-md p-2.5 sm:p-3 transition-colors"
                          >
                            <div key={feature.title}>
                              <p className="text-foreground mb-1 font-semibold text-sm sm:text-base">
                                {feature.title}
                              </p>
                              <p className="text-muted-foreground text-xs sm:text-sm">
                                {feature.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-4 sm:gap-6">
                  <Link
                    href="#about"
                    className="font-medium text-sm sm:text-base py-1"
                  >
                    Tentang Kami
                  </Link>
                  <Link
                    href="#projects"
                    className="font-medium text-sm sm:text-base py-1"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="#contact"
                    className="font-medium text-sm sm:text-base py-1"
                  >
                    Kontak Kami
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
