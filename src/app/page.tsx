import { AboutSection } from "@/components/about-us";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/project";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="font-sans items-center justify-center min-h-screen">
      <Navbar />
      <ScrollArea>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </ScrollArea>
      <Footer />
    </div>
  );
}
