import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const DesktopNav = () => {
  return (
    <nav className="container mx-auto hidden lg:flex justify-around items-center px-4 relative">
      {/* Logo 이미지 부분: home으로 이동 가능능  */}
      <Link href={"/"} className="relative">
        <Image
          src={"/images/nav-logo.png"}
          alt="League of Legends"
          width={100}
          height={50}
          className="w-[100px] h-[50px] object-cover"
        />
      </Link>

      {/* Home 페이지로 이동할 수 있게함  */}
      <Link
        href={"/"}
        className="relative text-xl font-bold transition-transform transform hover:scale-110 hover:text-yellow-500 group"
      >
        Home
        {/* 각 링크에 group 클래스 추가가함. group-hover로 호버 상태 시 밑줄 생기게함. */}
        <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
      </Link>

      {/* Champion List 페이지로 이동할 수 있게함 */}
      <Link
        href={"/champions"}
        className="relative text-xl font-bold transition-transform transform hover:scale-110 hover:text-yellow-500 group"
      >
        Champion List
        <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
      </Link>

      {/* Item List 페이지로 이동할 수 있게함 */}
      <Link
        href={"/items"}
        className="relative text-xl font-bold transition-transform transform hover:scale-110 hover:text-yellow-500 group"
      >
        Item List
        <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
      </Link>

      {/* Champion Rotation 페이지로 이동할 수 있게함 */}
      <Link
        href={"/rotation"}
        className="relative text-xl font-bold transition-transform transform hover:scale-110 hover:text-yellow-500 group"
      >
        Champion Rotation
        <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
      </Link>
      <ThemeToggle></ThemeToggle>
    </nav>
  );
};

export default DesktopNav;
