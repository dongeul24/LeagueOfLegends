import Link from "next/link";
import Image from "next/image";

type ChampionCardProps = {
  id: string;
  name: string;
  title: string;
  imageSrc: string;
};
// 필요한 정보들(ChampionCardProps)을 Champions의 page에서 전달받아 카드 만들어줌.

const ChampionCard = ({ id, name, title, imageSrc }: ChampionCardProps) => {
  return (
    <Link href={`/champions/${id}`}>
      <div className="bg-gray-800 border-white border-2 text-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 group">
        <div className="relative w-full h-[200px] bg-black">
          <Image
            src={imageSrc}
            alt={`${name} 이미지`}
            layout="fill"
            objectFit="contain"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold group-hover:text-yellow-500">
            {name}
          </h2>
          <p className="text-sm text-gray-400 group-hover:text-yellow-400">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ChampionCard;
