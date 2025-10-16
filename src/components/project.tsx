"use client";

import Autoplay from "embla-carousel-autoplay";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Building2,
  Calendar,
  Globe,
  GraduationCap,
  Heart,
  ShoppingCart,
  Smartphone,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Type definition for project
type Project = {
  id: number;
  title: string;
  category: "web" | "mobile";
  description: string;
  image: string;
  tags: string[];
  icon: LucideIcon;
  iconLabel: string;
  year: string;
  client: string;
  link: string;
};

// Data projects dengan dummy images dari Unsplash
const projects: Project[] = [
  {
    id: 1,
    title: "Website Universitas ABC",
    category: "web",
    description:
      "Redesign website kampus dengan sistem informasi akademik terintegrasi dan portal mahasiswa modern.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    icon: GraduationCap,
    iconLabel: "Education Project",
    year: "2024",
    client: "Universitas ABC",
    link: "#",
  },
  {
    id: 2,
    title: "Aplikasi E-Commerce Fashion",
    category: "mobile",
    description:
      "Aplikasi mobile e-commerce dengan fitur AR try-on, payment gateway, dan real-time tracking.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "MongoDB"],
    icon: ShoppingCart,
    iconLabel: "E-Commerce Project",
    year: "2024",
    client: "FashionHub Indonesia",
    link: "#",
  },
  {
    id: 3,
    title: "Sistem Manajemen Rumah Sakit",
    category: "web",
    description:
      "Platform terintegrasi untuk manajemen pasien, appointment, rekam medis elektronik, dan billing.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Laravel", "MySQL"],
    icon: Heart,
    iconLabel: "Healthcare Project",
    year: "2023",
    client: "RS Sehat Sentosa",
    link: "#",
  },
  {
    id: 4,
    title: "Corporate Website & CMS",
    category: "web",
    description:
      "Website korporat multi-bahasa dengan CMS custom untuk manajemen konten dan blog.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["Next.js", "Strapi", "TailwindCSS"],
    icon: Building2,
    iconLabel: "Corporate Project",
    year: "2024",
    client: "PT Maju Jaya",
    link: "#",
  },
  {
    id: 5,
    title: "Aplikasi Marketplace B2B",
    category: "mobile",
    description:
      "Platform B2B marketplace dengan fitur tender, quotation, dan supply chain management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Flutter", "Firebase", "REST API"],
    icon: Users,
    iconLabel: "B2B Marketplace Project",
    year: "2023",
    client: "TradeConnect",
    link: "#",
  },
  {
    id: 6,
    title: "Landing Page SaaS Product",
    category: "web",
    description:
      "Landing page modern untuk SaaS product dengan animasi interaktif dan conversion optimization.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "Framer Motion", "Vercel"],
    icon: Globe,
    iconLabel: "SaaS Landing Page Project",
    year: "2024",
    client: "CloudSync",
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 overflow-hidden bg-white"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#21b6fc]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#1e94d2]/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00334e] mb-4">
            Portofolio Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#21b6fc] to-[#1e94d2] mx-auto mb-6" />
          <p className="text-lg md:text-xl text-[#126088] max-w-3xl mx-auto">
            Beberapa project yang telah kami kerjakan dengan dedikasi dan
            profesionalitas tinggi
          </p>
        </div>

        {/* Tabs Filter */}
        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all" className="text-sm">
              Semua Project
            </TabsTrigger>
            <TabsTrigger value="web" className="text-sm">
              <Globe
                className="w-3.5 h-3.5 mr-1.5"
                aria-label="Website Projects"
              />
              Website
            </TabsTrigger>
            <TabsTrigger value="mobile" className="text-sm">
              <Smartphone
                className="w-3.5 h-3.5 mr-1.5"
                aria-label="Mobile App Projects"
              />
              Mobile App
            </TabsTrigger>
          </TabsList>

          {/* All Projects */}
          <TabsContent value="all" className="mt-0">
            <ProjectCarousel projects={projects} />
          </TabsContent>

          {/* Web Projects */}
          <TabsContent value="web" className="mt-0">
            <ProjectCarousel
              projects={projects.filter((p) => p.category === "web")}
            />
          </TabsContent>

          {/* Mobile Projects */}
          <TabsContent value="mobile" className="mt-0">
            <ProjectCarousel
              projects={projects.filter((p) => p.category === "mobile")}
            />
          </TabsContent>
        </Tabs>

        {/* CTA Button */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#21b6fc] to-[#1e94d2] hover:from-[#1e94d2] hover:to-[#21b6fc] text-white px-8 py-6 text-base shadow-lg"
          >
            Lihat Semua Project
            <ArrowUpRight className="w-4 h-4 ml-2" aria-label="External link" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Carousel Component with Auto-slide
function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 -translate-x-12 bg-white/95 backdrop-blur-sm border-[#C1EBF7] hover:bg-[#E6F7FB] hover:border-[#21b6fc] shadow-lg" />
        <CarouselNext className="right-0 translate-x-12 bg-white/95 backdrop-blur-sm border-[#C1EBF7] hover:bg-[#E6F7FB] hover:border-[#21b6fc] shadow-lg" />
      </Carousel>

      {/* Dot Indicators */}
      {count > 0 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, slideIndex) => (
            <button
              key={`slide-${slideIndex + 1}`}
              type="button"
              onClick={() => api?.scrollTo(slideIndex)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === slideIndex
                  ? "bg-[#1e94d2] w-8"
                  : "bg-[#C1EBF7] hover:bg-[#21b6fc] w-2.5"
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
              aria-current={current === slideIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Project Card Component with Tooltip
function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <TooltipProvider delayDuration={200}>
      <Card className="group overflow-hidden border-[#C1EBF7] hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#E6F7FB] to-[#C1EBF7]">
          <Image
            src={project.image}
            alt={`${project.title} - ${project.client}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00334e]/80 via-[#00334e]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {/* Icon Badge with Tooltip */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="absolute top-3 left-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg cursor-help transition-transform hover:scale-110">
                <Icon
                  className="w-4.5 h-4.5 text-[#1e94d2]"
                  strokeWidth={2}
                  aria-label={project.iconLabel}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-[#00334e] text-white border-[#1e94d2]"
            >
              <p className="text-sm font-medium">{project.iconLabel}</p>
            </TooltipContent>
          </Tooltip>

          {/* Year Badge with Tooltip */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-lg cursor-help transition-transform hover:scale-105">
                <Calendar
                  className="w-3 h-3 text-[#126088]"
                  aria-label="Project year"
                />
                <span className="text-xs font-semibold text-[#126088]">
                  {project.year}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="bg-[#00334e] text-white border-[#1e94d2]"
            >
              <p className="text-sm">Tahun Pengerjaan</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-[#00334e] group-hover:text-[#1e94d2] transition-colors line-clamp-1">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm text-[#126088] flex items-center gap-1.5 mt-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Building2
                  className="w-3.5 h-3.5 cursor-help"
                  aria-label="Client name"
                />
              </TooltipTrigger>
              <TooltipContent className="bg-[#00334e] text-white border-[#1e94d2]">
                <p className="text-sm">Nama Klien</p>
              </TooltipContent>
            </Tooltip>
            {project.client}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="text-sm text-[#126088] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs px-2 py-0.5 bg-[#E6F7FB] text-[#126088] hover:bg-[#C1EBF7] border-0"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-[#1e94d2] hover:text-[#00334e] hover:bg-[#E6F7FB] group/btn"
            asChild
          >
            <a href={project.link}>
              Lihat Detail
              <ArrowUpRight
                className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                aria-label="View project details"
              />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
}
