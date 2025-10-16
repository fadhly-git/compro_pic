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
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#21b6fc]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1e94d2]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-16 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Image
                  src="/pic.jpeg" // Ganti dengan logo Anda
                  alt="Partner in Code Logo"
                  width={32}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Partner in Code
                </h3>
                <p className="text-xs text-[#C1EBF7]">Your Tech Partner</p>
              </div>
            </div>
            <p className="text-sm text-[#C1EBF7] leading-relaxed mb-6">
              Solusi teknologi inovatif untuk mengembangkan bisnis Anda di era
              digital. Bersama kami, wujudkan transformasi digital yang
              berkelanjutan.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 hover:bg-[#21b6fc] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4 text-[#C1EBF7] group-hover:text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 hover:bg-[#21b6fc] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4 text-[#C1EBF7] group-hover:text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 hover:bg-[#21b6fc] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-[#C1EBF7] group-hover:text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 hover:bg-[#21b6fc] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4 text-[#C1EBF7] group-hover:text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com/fadhly-gitsekarang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 hover:bg-[#21b6fc] rounded-lg flex items-center justify-center transition-colors group"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 text-[#C1EBF7] group-hover:text-white" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Check our GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Portofolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/web"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Pengembangan Website
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Aplikasi Mobile
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/integration"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  Integrasi Sistem
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 mb-6">
              <li>
                <a
                  href="mailto:info@partnerincode.com"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-start gap-3 group"
                >
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Mail
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          aria-label="Email address"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Send us an email</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span>info@partnerincode.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+628123456789"
                  className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors flex items-start gap-3 group"
                >
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Phone
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          aria-label="Phone number"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Call us</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span>+62 812-3456-7890</span>
                </a>
              </li>
              <li>
                <div className="text-sm text-[#C1EBF7] flex items-start gap-3">
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <MapPin
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          aria-label="Office location"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Our office</p>
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
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">
                Newsletter
              </h5>
              <p className="text-xs text-[#C1EBF7] mb-3">
                Dapatkan update terbaru dari kami
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  className="bg-white/10 border-white/20 text-white placeholder:text-[#C1EBF7]/60 focus:border-[#21b6fc] h-9 text-sm"
                  aria-label="Email for newsletter"
                />
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="submit"
                        size="icon"
                        className="bg-gradient-to-r from-[#21b6fc] to-[#1e94d2] hover:from-[#1e94d2] hover:to-[#21b6fc] h-9 w-9 flex-shrink-0"
                        aria-label="Subscribe to newsletter"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Subscribe</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#C1EBF7] text-center md:text-left">
            © {currentYear}{" "}
            <span className="font-semibold text-white">Partner in Code</span>.
            All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-sm text-[#C1EBF7] hover:text-[#21b6fc] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
