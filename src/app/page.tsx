import { AboutSection } from "@/components/sections/about-us";
import { Footer } from "@/components/layouts/footer";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/layouts/navbar";
import { ProjectsSection } from "@/components/sections/project";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
