import CourtHeader from "@/components/layout/CourtHeader";
import HeroSection from "@/components/home/HeroSection";
import QuickAccess from "@/components/home/QuickAccess";
import LatestInformation from "@/components/home/LatestInformation";

export default function Home() {
  return (
    <>
      <CourtHeader />

      <main>
        <HeroSection />
        <QuickAccess />
        <LatestInformation />
      </main>
    </>
  );
}