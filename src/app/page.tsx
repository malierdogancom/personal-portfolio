import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ResearchSection />
      <TimelineSection />
      <AwardsSection />
      <ProjectsSection />
      <PublicationsSection />
      <ContactSection />
    </div>
  );
}
