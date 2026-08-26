import CourtHeader from "@/components/layout/CourtHeader";
import HeroSection from "@/components/home/HeroSection";
import QuickAccess from "@/components/home/QuickAccess";
import LatestUpdates from "@/components/home/LatestUpdates";
import CauseListPreview from "@/components/home/CauseListPreview";
import LatestJudgments from "@/components/judgments/LatestJudgments";
import CourtServices from "@/components/services/CourtServices";
import ImportantResources from "@/components/resources/ImportantResources";
import SiteFooter from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <>
      <CourtHeader />

      <main>
        <HeroSection />

        <QuickAccess />

        <LatestUpdates />

        <CauseListPreview />

        <LatestJudgments />

        <CourtServices />

        <ImportantResources />
      </main>

      <SiteFooter />
    </>
  );
}