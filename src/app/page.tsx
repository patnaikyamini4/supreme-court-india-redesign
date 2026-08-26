import CourtHeader from "@/components/layout/CourtHeader";
import HeroSection from "@/components/home/HeroSection";
import QuickAccess from "@/components/home/QuickAccess";
import LatestUpdates from "@/components/home/LatestUpdates";
import CauseListPreview from "@/components/home/CauseListPreview";
import LatestJudgments from "@/components/judgments/LatestJudgments";
import CourtServices from "@/components/services/CourtServices";

export default function Home() {
  return (
    <>
      <CourtHeader />

      <main>
        {/* Hero and search */}
        <HeroSection />

        {/* Frequently used services */}
        <QuickAccess />

        {/* Notices and announcements */}
        <LatestUpdates />

        {/* Daily court listings */}
        <CauseListPreview />

        {/* Recently published judgments */}
        <LatestJudgments />

        {/* Court digital services */}
        <CourtServices />
      </main>
    </>
  );
}