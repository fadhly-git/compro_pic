"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

const Navbar = () => {
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
    <section className="fixed top-0 left-0 z-50 py-4 px-2 w-full justify-center items-center flex bg-background backdrop-blur-sm">
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <Image
              width={32}
              height={32}
              src="/pic-croped.png"
              className="max-h-8"
              alt="PIC Logo"
            />
            <span className="text-lg font-semibold tracking-tighter">
              Partner In Code
            </span>
          </Link>
          <NavigationMenu className="[&_div.absolute]:-left-[9rem] [&_div.absolute]:top-12 hidden lg:block">
            <h1 className="sr-only">Main Navigation</h1>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Produk & Layanan</NavigationMenuTrigger>
                <NavigationMenuContent className="left-0 w-auto">
                  <h1 className="text-xl pl-4 pt-2 text-foreground mb-1 font-semibold">
                    Produk & Layanan
                  </h1>
                  <div className="grid grid-cols-3 gap-3 min-w-[900px] max-w-[800px] p-4 overflow-x-auto max-h-[300px]">
                    {features.slice(0, 9).map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={Number(index)}
                        className="hover:bg-muted/70 rounded-md p-3 transition-colors"
                      >
                        <div>
                          <p className="text-foreground mb-1 font-semibold">
                            {feature.title}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Tentang Kami
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button
              onClick={() =>
                window.open("https://wa.me/6281234567890", "_blank")
              }
            >
              <span className="flex items-center gap-2">
                <Image
                  src={"/whatsapp-svgrepo-com.svg"}
                  height={20}
                  width={20}
                  alt="whatsapp icon"
                />
                <span className="sr-only">Chat with us on WhatsApp</span>
                Hubungi Kami
              </span>
            </Button>
          </div>

          {/* mobile */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/pic-croped.png"
                      width={32}
                      height={32}
                      className="max-h-8"
                      alt="PIC Logo"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Partner In Code
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mb-2 mt-4">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <a
                            href={feature.href}
                            key={Number(index)}
                            className="hover:bg-muted/70 rounded-md p-3 transition-colors"
                          >
                            <div key={feature.title}>
                              <p className="text-foreground mb-1 font-semibold">
                                {feature.title}
                              </p>
                              <p className="text-muted-foreground text-sm">
                                {feature.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <Link href="#" className="font-medium">
                    Templates
                  </Link>
                  <Link href="#" className="font-medium">
                    Blog
                  </Link>
                  <Link href="#" className="font-medium">
                    Pricing
                  </Link>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <Button>Start for free</Button>
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
