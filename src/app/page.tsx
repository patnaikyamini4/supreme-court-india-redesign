import CourtHeader from "@/components/layout/CourtHeader";
import HeroSection from "@/components/home/HeroSection";
import QuickAccess from "@/components/home/QuickAccess";
import LatestUpdates from "@/components/home/LatestUpdates";
import CauseListPreview from "@/components/home/CauseListPreview";
import LatestJudgments from "@/components/judgments/LatestJudgments";

export default function Home() {
  return (
    <>
      <CourtHeader />

      <main>
        {/* Hero and search */}
        <HeroSection />

        {/* Frequently used services */}
        <QuickAccess />

        {/* Latest notices and announcements */}
        <LatestUpdates />

        {/* Today's court listings */}
        <CauseListPreview />

        {/* Recently published judgments */}
        <LatestJudgments />
      </main>
    </>
  );
}