import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col justify-center items-center">
      {/* 헤더 섹션 */}
      <div className="text-center">
        <h1 className="text-3xl pt-10 font-bold text-yellow-500 drop-shadow-lg">
          리그 오브 레전드 백과사전
        </h1>
        <p className="mt-4 text-gray-400">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>

      {/* 메인 콘텐츠 섹션 */}
      <div className="mt-[40px] flex flex-col justify-center gap-10 w-1/2 pb-10">
        {/* 챔피언 목록 */}
        <div className="relative h-[500px] rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/images/home-image1.webp')] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"></div>
          <Link
            href={"/champions"}
            className="relative z-5 flex justify-center items-center h-full text-2xl font-bold text-yellow-300"
          >
            <span className="w-full py-4 bg-gray-800 bg-opacity-70 text-center">
              챔피언 목록 보기
            </span>
          </Link>
        </div>

        {/* 금주 로테이션 */}
        <div className="relative h-[500px] rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/images/home-image2.webp')] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"></div>
          <Link
            href={"/rotation"}
            className="relative z-5 flex justify-center items-center h-full text-2xl font-bold text-yellow-300"
          >
            <span className="w-full py-4 bg-gray-800 bg-opacity-70 text-center">
              금주 로테이션 확인
            </span>
          </Link>
        </div>

        {/* 아이템 목록 */}
        <div className="relative h-[500px] rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/images/home-image3.webp')] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"></div>
          <Link
            href={"/items"}
            className="relative z-5 flex justify-center items-center h-full text-2xl font-bold text-yellow-300"
          >
            <span className="w-full py-4 bg-gray-800 bg-opacity-70 text-center">
              아이템 목록 보기
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
