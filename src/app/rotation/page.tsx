"use client";

import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import ChampionCard from "@/components/cards/ChampionCard";
import { Champions, Champion } from "@/types/Champion";
import LoadingSpinner from '@/components/status/LoadingSpinner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '금주 로테이션 챔피언',
  description: '사용자들이 무료로 플레이할 수 있는 League of Legends 챔피언들을 소개하는 페이지. 챔피언들은 매주 바뀝니다.'
};

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
    retry: 2, // 요청 실패 시 최대 두 번 재시도
  });

  if (isRotationPending) {
    return <LoadingSpinner></LoadingSpinner>;
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
      <h1 className="text-3xl font-bold text-center mb-14">
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
