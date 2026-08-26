import GovernmentBar from "./GovernmentBar";
import SiteHeader from "./SiteHeader";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function CourtHeader() {
  return (
    <header className="w-full">
      <GovernmentBar />
      <SiteHeader />
      <DesktopNav />
      <MobileNav />
    </header>
  );
}