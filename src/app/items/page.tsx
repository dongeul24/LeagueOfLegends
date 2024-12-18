import { fetchItemList, getLatestVersion } from "@/utils/serverApi";
import ItemCard from "@/components/ItemCard";
import { Items, Item } from "@/types/Item";

// 아이템 보여주는 페이지
export default async function ItemsPage() {
  const items: Items = await fetchItemList();
  const latestversion: string = await getLatestVersion();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-center mb-10 text-yellow-500">
        아이템 리스트
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Object.entries(items).map(([id, item]: [string, Item]) => (
          <ItemCard key={id} item={item} version={latestversion} />
        ))}
      </div>
    </main>
  );
}
