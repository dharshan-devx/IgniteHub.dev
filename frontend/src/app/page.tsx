import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ResourcesGrid from "@/components/sections/ResourcesGrid";
import CallToActionSection from "@/components/sections/CallToActionSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <StatsSection />
      <ResourcesGrid />
      <CallToActionSection />
    </div>
  );
}
