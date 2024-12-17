import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <header className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-4 fixed top-0 w-full z-50 shadow-lg">
      <DesktopNav></DesktopNav>
      <MobileNav></MobileNav>
    </header>
  );
}
