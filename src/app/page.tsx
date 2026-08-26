import CourtHeader from "@/components/layout/CourtHeader";
import HeroSection from "@/components/home/HeroSection";
import QuickAccess from "@/components/home/QuickAccess";

export default function Home() {
  return (
    <>
      <CourtHeader />

      <main>
        <HeroSection />
        <QuickAccess />
      </main>
    </>
  );
}