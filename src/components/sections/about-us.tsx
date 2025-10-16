import {
  CheckCircle2,
  Eye,
  Lightbulb,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decorative elements - responsif */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#21b6fc]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-[#1e94d2]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00334e] mb-3 sm:mb-4 px-4">
            Tentang Kami
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#21b6fc] to-[#1e94d2] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-[#126088] max-w-3xl mx-auto px-4">
            Partner terpercaya untuk solusi teknologi bisnis Anda
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="animate-fade-in-left order-2 md:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
                alt="Partner in Code Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00334e]/60 to-transparent"></div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="animate-fade-in-right order-1 md:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#00334e] mb-4 sm:mb-6">
              Siapa Kami?
            </h3>
            <p className="text-[#126088] text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
              <span className="font-bold text-[#1e94d2]">Partner in Code</span>{" "}
              adalah perusahaan teknologi yang berfokus pada pengembangan solusi
              digital inovatif untuk bisnis modern. Kami hadir untuk menjadi
              mitra strategis Anda dalam transformasi digital.
            </p>
            <p className="text-[#126088] text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
              Dengan pengalaman lebih dari{" "}
              <span className="font-bold text-[#1e94d2]">5 tahun</span> di
              industri teknologi, kami telah membantu{" "}
              <span className="font-bold text-[#1e94d2]">40+ klien</span> dari
              berbagai sektor untuk mewujudkan visi digital mereka melalui
              solusi yang kreatif, efisien, dan terpercaya.
            </p>

            {/* Key Points */}
            <div className="space-y-3 sm:space-y-4 flex flex-col">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#21b6fc] to-[#1e94d2] flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-[#126088] self-center text-sm sm:text-base">
                  <span className="font-semibold">Tim Profesional</span> dengan
                  pengalaman di berbagai industri teknologi
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#21b6fc] to-[#1e94d2] flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-[#126088] self-center text-sm sm:text-base">
                  <span className="font-semibold">Teknologi Terkini</span> untuk
                  solusi yang scalable dan modern
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#21b6fc] to-[#1e94d2] flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-[#126088] self-center text-sm sm:text-base">
                  <span className="font-semibold">Dukungan Penuh</span> dari
                  tahap konsultasi hingga maintenance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {/* Vision */}
          <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#C1EBF7] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#21b6fc] to-[#1e94d2] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
              <Eye className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#00334e] mb-3 sm:mb-4">
              Visi Kami
            </h3>
            <p className="text-[#126088] leading-relaxed text-sm sm:text-base text-center">
              Menjadi mitra teknologi terpercaya yang membantu bisnis di
              Indonesia dan seluruh dunia untuk berkembang melalui inovasi
              digital yang berkelanjutan.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#C1EBF7] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up delay-200">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#21b6fc] to-[#1e94d2] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
              <Target className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#00334e] mb-3 sm:mb-4">
              Misi Kami
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-[#126088] text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#21b6fc] flex-shrink-0 mt-0.5" />
                <span>
                  Memberikan solusi IT berkualitas tinggi dan inovatif
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#21b6fc] flex-shrink-0 mt-0.5" />
                <span>
                  Mendukung transformasi digital klien secara menyeluruh
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#21b6fc] flex-shrink-0 mt-0.5" />
                <span>Menciptakan nilai tambah melalui teknologi terdepan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#00334e] mb-3 sm:mb-4 px-4">
            Nilai-Nilai Kami
          </h3>
          <p className="text-[#126088] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Prinsip yang menjadi landasan setiap solusi yang kami kembangkan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Value 1 */}
          <div className="text-center p-6 sm:p-8 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#C1EBF7] hover:bg-white/90 hover:shadow-xl hover:scale-[1.05] hover:border-[#21b6fc] transition-all duration-300 animate-fade-in-up group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#21b6fc] to-[#1e94d2] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#00334e] mb-2">
              Inovasi
            </h4>
            <p className="text-[#126088] text-xs sm:text-sm leading-relaxed">
              Selalu mencari solusi kreatif dan terdepan untuk setiap tantangan
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center p-6 sm:p-8 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#C1EBF7] hover:bg-white/90 hover:shadow-xl hover:scale-[1.05] hover:border-[#21b6fc] transition-all duration-300 animate-fade-in-up delay-100 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#21b6fc] to-[#1e94d2] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#00334e] mb-2">
              Kolaborasi
            </h4>
            <p className="text-[#126088] text-xs sm:text-sm leading-relaxed">
              Bekerja sama dengan klien untuk mencapai hasil terbaik
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center p-6 sm:p-8 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#C1EBF7] hover:bg-white/90 hover:shadow-xl hover:scale-[1.05] hover:border-[#21b6fc] transition-all duration-300 animate-fade-in-up delay-200 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#21b6fc] to-[#1e94d2] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#00334e] mb-2">
              Integritas
            </h4>
            <p className="text-[#126088] text-xs sm:text-sm leading-relaxed">
              Komitmen tinggi pada kualitas dan kejujuran dalam setiap project
            </p>
          </div>

          {/* Value 4 */}
          <div className="text-center p-6 sm:p-8 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#C1EBF7] hover:bg-white/90 hover:shadow-xl hover:scale-[1.05] hover:border-[#21b6fc] transition-all duration-300 animate-fade-in-up delay-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#21b6fc] to-[#1e94d2] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#00334e] mb-2">
              Kecepatan
            </h4>
            <p className="text-[#126088] text-xs sm:text-sm leading-relaxed">
              Responsif dan efisien dalam menyelesaikan setiap project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
