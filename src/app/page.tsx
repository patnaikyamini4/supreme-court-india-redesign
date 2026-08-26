import CourtHeader from "@/components/layout/CourtHeader";
import HeroSection from "@/components/home/HeroSection";
import QuickAccess from "@/components/home/QuickAccess";
import LatestUpdates from "@/components/home/LatestUpdates";
import CauseListPreview from "@/components/home/CauseListPreview";

export default function Home() {
  return (
    <>
      <CourtHeader />

      <main>
        <HeroSection />
        <QuickAccess />
        <LatestUpdates />
        <CauseListPreview />
      </main>
    </>
  );
}