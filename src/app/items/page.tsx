import { fetchItemList, getLatestVersion } from "@/utils/serverApi";
import ItemCard from "@/components/ItemCard";
import { Items, Item} from "@/types/Item";

// 아이템 보여주는 페이지지
export default async function ItemsPage() {
  const items: Items = await fetchItemList();
  const latestversion: string = await getLatestVersion();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">아이템 목록</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Object.entries(items).map(([id, item]: [string, Item]) => (
          <ItemCard key={id} item={item} version={latestversion} />
        ))}
      </div>
    </main>
  );
}
