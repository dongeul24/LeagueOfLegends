import { fetchChampions } from "@/utils/serverApi";
import ChampionCard from "@/components/cards/ChampionCard";
import { Champions, Champion } from "@/types/Champion";
import { Metadata } from "next";

// ISR 렌더링 방식
export const revalidate = 86400; // ISR 재검증 시간

export const metadata: Metadata = {
  title: "리그 오브 레전드 챔피언",
  description: "League of Legends 챔피언 정보 제공",
};

const ChampionsPage = async () => {
  const champions: Champions = await fetchChampions(); //쳄피언들 정보 가져오기

  return (
    <main className="container mx-auto px-10 py-8 ">
      <h1 className="text-2xl font-bold text-center mb-14">챔피언 리스트</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* 여기서 map으로 Chamion Card를 각각 만들어줌 */}
        {Object.entries(champions).map(([id, champion]: [string, Champion]) => (
          <ChampionCard
            key={id}
            id={id}
            name={champion.name}
            title={champion.title}
            imageSrc={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${id}.png`}
          />
        ))}
      </div>
    </main>
  );
};

export default ChampionsPage;
