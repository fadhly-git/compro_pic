import type { Project } from "@/types";
import {
  Building2,
  Globe,
  GraduationCap,
  Heart,
  ShoppingCart,
  Users,
} from "lucide-react";

export const projects: Project[] = [
  {
    id: 1,
    title: "Website Universitas ABC",
    category: "web",
    summary: "Portal akademik modern dengan sistem informasi terintegrasi.",
    description:
      "Redesign website kampus dengan sistem informasi akademik terintegrasi dan portal mahasiswa modern.",
    image:
      "https://via.placeholder.com/800x600/21b6fc/ffffff?text=Project+Image",
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
    summary:
      "Aplikasi belanja fashion dengan AR try-on dan integrasi pembayaran.",
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
    summary:
      "Platform manajemen rumah sakit untuk pasien, appointment, dan rekam medis.",
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
    summary: "Website korporat multi-bahasa dengan CMS custom untuk konten.",
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
    summary:
      "Marketplace B2B untuk tender, quotation, dan manajemen supply chain.",
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
    summary: "Landing page modern untuk SaaS dengan fokus conversion.",
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
