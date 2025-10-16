import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#00334e] to-[#001f2e] text-white overflow-hidden">
      {/* Decorative elements - responsif */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#21b6fc]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-[#1e94d2]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 py-10 sm:py-12 lg:py-16 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/pic.jpeg"
                  alt="Partner in Code Logo"
                  width={32}
                  height={32}
                  className="object-contain rounded-sm w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Partner in Code
                </h3>
                <p className="text-[10px] sm:text-xs text-[#C1EBF7]">
                  Your Tech Partner
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#C1EBF7] leading-relaxed mb-4 sm:mb-6">
              Solusi teknologi inovatif untuk mengembangkan bisnis Anda di era
              digital. Bersama kami, wujudkan transformasi digital yang
              berkelanjutan.
            </p>

            {/* Social Media */}
            <div className="flex gap-2 sm:gap-3">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-[#21b6fc] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C1EBF7] group-hover:text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs sm:text-sm">Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-[#21b6fc] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C1EBF7] group-hover:text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs sm:text-sm">Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-[#21b6fc] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C1EBF7] group-hover:text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs sm:text-sm">Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-[#21b6fc] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C1EBF7] group-hover:text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs sm:text-sm">Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com/fadhly-gitsekarang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-[#21b6fc] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label="GitHub"
                    >
                      <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C1EBF7] group-hover:text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs sm:text-sm">Check our GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Portofolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">
              Layanan Kami
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/services/web"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Pengembangan Website
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Aplikasi Mobile
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/integration"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Integrasi Sistem
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <li>
                <a
                  href="mailto:info@partnerincode.com"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-start gap-2 sm:gap-3 group"
                >
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Mail
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0"
                          aria-label="Email address"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs sm:text-sm">Send us an email</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="break-all">info@partnerincode.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+628123456789"
                  className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-start gap-2 sm:gap-3 group"
                >
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Phone
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0"
                          aria-label="Phone number"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs sm:text-sm">Call us</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span>+62 812-3456-7890</span>
                </a>
              </li>
              <li>
                <div className="text-xs sm:text-sm text-[#C1EBF7] flex items-start gap-2 sm:gap-3">
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <MapPin
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0"
                          aria-label="Office location"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs sm:text-sm">Our office</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span>
                    Jl. Teknologi No. 123, Jakarta Selatan, Indonesia 12190
                  </span>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-[#C1EBF7] text-center md:text-left">
            © {currentYear}{" "}
            <span className="font-semibold text-white">Partner in Code</span>.
            All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-xs sm:text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
