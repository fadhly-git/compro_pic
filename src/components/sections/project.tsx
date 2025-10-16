"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  ArrowUpRight,
  Building2,
  Calendar,
  Globe,
  Smartphone,
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
import type { Project } from "@/types";
import { projects } from "@/data/data";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      {/* Background decorative elements - responsif */}
      <div className="absolute top-10 sm:top-20 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#21b6fc]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-0 w-56 h-56 sm:w-96 sm:h-96 bg-[#1e94d2]/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00334e] mb-3 sm:mb-4 px-4">
            Portofolio Kami
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#21b6fc] to-[#1e94d2] mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-[#126088] max-w-3xl mx-auto px-4">
            Beberapa project yang telah kami kerjakan dengan dedikasi dan
            profesionalitas tinggi
          </p>
        </div>

        {/* Tabs Filter */}
        <Tabs defaultValue="all" className="w-full mb-6 sm:mb-8">
          <TabsList className="grid w-full max-w-xs sm:max-w-md mx-auto grid-cols-3 mb-8 sm:mb-10 lg:mb-12">
            <TabsTrigger value="all" className="text-xs sm:text-sm px-2">
              Semua
            </TabsTrigger>
            <TabsTrigger value="web" className="text-xs sm:text-sm px-2">
              <Globe
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5"
                aria-label="Website Projects"
              />
              <span className="hidden sm:inline">Website</span>
              <span className="sm:hidden">Web</span>
            </TabsTrigger>
            <TabsTrigger value="mobile" className="text-xs sm:text-sm px-2">
              <Smartphone
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5"
                aria-label="Mobile App Projects"
              />
              <span className="hidden sm:inline">Mobile App</span>
              <span className="sm:hidden">Mobile</span>
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
        <div className="text-center mt-8 sm:mt-10 lg:mt-12 animate-fade-in-up">
          <Button className="bg-gradient-to-r from-[#21b6fc] to-[#1e94d2] hover:from-[#1e94d2] hover:to-[#21b6fc] text-white text-sm sm:text-base shadow-lg w-full sm:w-auto">
            Lihat Semua Project
            <ArrowUpRight
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2"
              aria-label="External link"
            />
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
        <CarouselPrevious className="left-0 -translate-x-12 bg-white/95 backdrop-blur-sm border-[#C1EBF7] hover:bg-[#9fa7a9] hover:border-[#21b6fc] shadow-lg" />
        <CarouselNext className="right-0 translate-x-12 bg-white/95 backdrop-blur-sm border-[#C1EBF7] hover:bg-[#9fa7a9] hover:border-[#21b6fc] shadow-lg" />
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
