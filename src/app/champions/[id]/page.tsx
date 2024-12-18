import { fetchChampionDetail } from "@/utils/serverApi";
import ChampionDetailCard from "@/components/ChampionDetailCard";
import { ChampionDetail } from "@/types/ChampionDetails";

interface ChampionDetailProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ChampionDetailProps) {
  const championDetail: ChampionDetail = await fetchChampionDetail(params.id);

  return {
    title: `${championDetail.name} - 롤 챔피언 상세 정보보`,
    description: championDetail.lore,
  };
}

export default async function ChampionDetailPage({params}: ChampionDetailProps) {
  const championDetail: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <main className="container mx-auto px-4 py-8">
      <ChampionDetailCard champion={championDetail} />
    </main>
  );
}
