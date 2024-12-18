import Image from "next/image";
import { Item } from "@/types/Item";

type ItemCardProps = {
  item: Item;
  version: string
};

export default function ItemCard({ item, version }: ItemCardProps) {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden p-4">
      <div className="relative w-full aspect-square">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
          alt={item.name}
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p className="text-sm text-gray-400">{item.plaintext}</p>
      </div>
    </div>
  );
}
