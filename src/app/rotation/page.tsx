"use client";

import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import ChampionCard from "@/components/ChampionCard";
import { Champions, Champion } from "@/types/Champion";

export default function RotationPage() {
  const {
    data: freeChampions,
    isPending: isRotationPending,
    isError: isRotationError,
  } = useQuery<Champions>({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
    staleTime: 10 * 60 * 1000, // 10분
    gcTime: 10 * 60 * 1000, // 10분 // cache time
  });

  if (isRotationPending) {
    return <p className="text-center text-white">로딩 중...</p>;
  }

  if (isRotationError) {
    return (
      <p className="text-center text-red-500">
        데이터를 가져오는 중 문제가 발생함.
      </p>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        금주의 로테이션 챔피언
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.entries(freeChampions).map(
          ([id, champion]: [string, Champion]) => (
            <ChampionCard
              key={id}
              id={id}
              name={champion.name}
              title={champion.title}
              imageSrc={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${id}.png`}
            />
          )
        )}
      </div>
    </main>
  );
}
