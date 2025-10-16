import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] bg-gradient-to-br from-[#F3FCFF] via-[#E6F7FB] to-[#C1E8F7] px-6 overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#21b6fc]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1e94d2]/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#00a3cc]/10 rounded-full blur-2xl"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full text-center space-y-8">
        <div className="animate-fade-in-down">
          <Image
            src="/pic.jpeg"
            width={140}
            height={140}
            alt="Partner in Code Logo"
            className="drop-shadow-2xl rounded-lg"
            priority
          />
        </div>
        <h1 className="text-3xl md:text-6xl lg:text-5xl font-extrabold text-[#00334e] leading-tight animate-fade-in">
          Partner in Code
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-[#126088] max-w-2xl font-medium leading-relaxed animate-fade-in-up">
          Solusi teknologi yang{" "}
          <span className="font-bold text-[#1e94d2]">kreatif</span>,
          <span className="font-bold text-[#1e94d2]"> inovatif</span>, dan
          <span className="font-bold text-[#1e94d2]"> terpercaya</span> untuk
          bisnis masa kini.
        </p>

        <p className="text-base md:text-lg text-[#126088]/80 max-w-xl animate-fade-in-up delay-200">
          Bersama kami, wujudkan transformasi digital Anda dengan teknologi
          terdepan dan tim profesional berpengalaman.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-300">
          <Button className="bg-gradient-to-r from-[#21b6fc] to-[#1e94d2] text-white font-semibold px-10 py-4 rounded-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center text-lg"
            >
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button className="bg-white/80 backdrop-blur-sm text-[#1e94d2] font-semibold px-10 py-4 rounded-md border-2 border-[#21b6fc] hover:bg-[#21b6fc] hover:text-white transition-all duration-300 text-lg shadow-lg">
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center"
            >
              Lihat Portfolio
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-8 pt-8 text-[#126088] animate-fade-in-up delay-500">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#1e94d2]">50+</span>
            <span className="text-sm">Project Selesai</span>
          </div>
          <div className="w-px h-12 bg-[#126088]/30"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#1e94d2]">40+</span>
            <span className="text-sm">Klien Puas</span>
          </div>
          <div className="w-px h-12 bg-[#126088]/30"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#1e94d2]">5+</span>
            <span className="text-sm">Tahun Pengalaman</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#126088]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Scroll Down Indicator</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};
