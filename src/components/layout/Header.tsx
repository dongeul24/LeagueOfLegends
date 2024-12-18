import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


export default function Header() {
  return (
    <header className="bg-gradient-to-b text-white from-cyan-950 to-cyan-800 dark:from-gray-900 dark:to-gray-800 py-4 fixed top-0 w-full z-50 shadow-lg">
      <DesktopNav></DesktopNav>
      <MobileNav></MobileNav>
    </header>
  );
}
