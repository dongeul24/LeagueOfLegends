import Image from "next/image";
import { ChampionDetail } from "@/types/ChampionDetails";

type ChampionDetailCardProps = {
  champion: ChampionDetail;
};

export default function ChampionDetailCard({
  champion,
}: ChampionDetailCardProps) {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 mx-auto max-w-3xl flex flex-col items-center space-y-6">
      {/* 챔피언 이미지 섹션 */}
      <div className="w-full relative aspect-[16/9] rounded-lg overflow-hidden">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.name}
          fill
          className="object-cover"
        />
      </div>

      {/* 챔피언 설명 섹션 */}
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-yellow-300 mb-2">
          {champion.name}
        </h1>
        <h2 className="text-xl text-gray-300 italic mb-4">{champion.title}</h2>
        <p className="text-gray-200 mb-6 leading-relaxed">{champion.lore}</p>
      </div>

      {/* 스킬 정보 */}
      <div className="w-full">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-2 text-center">
          스킬
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {champion.spells.map((spell) => (
            <li key={spell.id}>
              <span className="font-bold text-white">{spell.name}:</span>{" "}
              {spell.description}
            </li>
          ))}
        </ul>
      </div>

      {/* 스탯 정보 */}
      <div className="w-full">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-2 text-center">
          스탯
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>공격력: {champion.stats.attackdamage}</li>
          <li>체력: {champion.stats.hp}</li>
          <li>방어력: {champion.stats.armor}</li>
          <li>마법 저항력: {champion.stats.spellblock}</li>
        </ul>
      </div>
    </div>
  );
}
