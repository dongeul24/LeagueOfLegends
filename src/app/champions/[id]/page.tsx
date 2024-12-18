import { fetchChampionDetail } from '@/utils/serverApi';
import ChampionDetailCard from '@/components/cards/ChampionDetailCard';
import { ChampionDetail } from '@/types/ChampionDetails';
import LoadingSpinner from '@/components/status/LoadingSpinner';
import { Suspense } from 'react';

// ssr 렌더링 방식
export const dynamic = 'force-dynamic';

interface ChampionDetailProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ChampionDetailProps) {
  const championDetail: ChampionDetail = await fetchChampionDetail(params.id);

  return {
    title: `${championDetail.name} - 롤 챔피언 상세 정보`,
    description: championDetail.lore
  };
}

export default async function ChampionDetailPage({ params }: ChampionDetailProps) {
  const championDetail: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <main className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingSpinner />}>
        <ChampionDetailCard champion={championDetail} />
      </Suspense>
    </main>
  );
}
