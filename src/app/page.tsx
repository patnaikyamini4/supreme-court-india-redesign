import CourtHeader from "@/components/layout/CourtHeader";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import QuickAccess from "@/components/home/QuickAccess";
import LatestInformation from "@/components/home/LatestInformation";
import JudgmentExplorer from "@/components/home/JudgmentExplorer";
import CourtSchedule from "@/components/home/CourtSchedule";
import CourtResources from "@/components/home/CourtResources";

export default function Home() {
  return (
    <>
      <CourtHeader />

      <main>
        <HeroSection />

        <QuickAccess />

        <LatestInformation />

        <JudgmentExplorer />

        <CourtSchedule />

        <CourtResources />
      </main>

      <Footer />
    </>
  );
}