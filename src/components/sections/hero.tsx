import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[85vw] sm:min-h-[95vh] bg-gradient-to-br from-[#F3FCFF] via-[#E6F7FB] to-[#C1E8F7] py-12 sm:py-2 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements - responsif */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#21b6fc]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-[#1e94d2]/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#00a3cc]/10 rounded-full blur-2xl"></div>

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center max-w-4xl w-full text-center space-y-4 sm:space-y-6 lg:space-y-8 py-8 sm:py-0">
        <div className="animate-fade-in-down">
          <Image
            src="/pic.jpeg"
            width={100}
            height={100}
            alt="Partner in Code Logo"
            className="drop-shadow-2xl rounded-lg w-20 h-20 sm:w-28 sm:h-28 lg:w-[140px] lg:h-[140px]"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#00334e] leading-tight animate-fade-in px-4">
          Partner in Code
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#126088] max-w-2xl font-medium leading-relaxed animate-fade-in-up px-4">
          Solusi teknologi yang{" "}
          <span className="font-bold text-[#1e94d2]">kreatif</span>,
          <span className="font-bold text-[#1e94d2]"> inovatif</span>, dan
          <span className="font-bold text-[#1e94d2]"> terpercaya</span> untuk
          bisnis masa kini.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-[#126088]/80 max-w-xl animate-fade-in-up delay-200 px-4">
          Bersama kami, wujudkan transformasi digital Anda dengan teknologi
          terdepan dan tim profesional berpengalaman.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-in-up delay-300 w-full sm:w-auto px-4">
          <Button className="bg-gradient-to-r from-[#21b6fc] to-[#1e94d2] text-white font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center text-base sm:text-lg"
            >
              Konsultasi Gratis
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </Button>

          <Button className="bg-white/80 backdrop-blur-sm text-[#1e94d2] font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-md border-2 border-[#21b6fc] hover:bg-[#21b6fc] hover:text-white transition-all duration-300 text-base sm:text-lg shadow-lg w-full sm:w-auto">
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center"
            >
              Lihat Portfolio
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 lg:pt-8 text-[#126088] animate-fade-in-up delay-500 px-4">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e94d2]">
              50+
            </span>
            <span className="text-xs sm:text-sm">Project Selesai</span>
          </div>
          <div className="w-px h-8 sm:h-10 lg:h-12 bg-[#126088]/30"></div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e94d2]">
              40+
            </span>
            <span className="text-xs sm:text-sm">Klien Puas</span>
          </div>
          <div className="w-px h-8 sm:h-10 lg:h-12 bg-[#126088]/30"></div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e94d2]">
              5+
            </span>
            <span className="text-xs sm:text-sm">Tahun Pengalaman</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#126088]"
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
