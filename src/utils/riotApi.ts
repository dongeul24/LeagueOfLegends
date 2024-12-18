import { ChampionRotation } from "@/types/ChampionRotation";
import { Champions, Champion } from "@/types/Champion";
import { fetchChampions } from "./serverApi";

export async function getChampionRotation(): Promise<Champions> {
  try {
    const championRotationRes = await fetch("/api/rotation");

    if (!championRotationRes.ok) {
      throw new Error("로테이션 데이터를 가져오기 실패함.");
    }

    const championRotationData: ChampionRotation =
      await championRotationRes.json();

    // 매주 공짜로 플레이할 수 있는 챔피언들의 key를 모아둔 배열
    const freeChampionIds: number[] = championRotationData.freeChampionIds;

    // 모든 챔피언들 정보 리스트 - (각각의 key값들을 확인해서 어떤게 무료 플레이 챔인지 찾아야함)
    const champions: Champions = await fetchChampions();

    // 객체를 Object,entries 이용해서 배열로 변환한거를 includes사용해서
    // key값 일치하는 것을 조건으로 필터(filter)해서
    // Object.fromEntries로 다시 객체 만들어줌.
    // 결과적으로 freeChampions는 무료로 플레이 할 수 있는 챔피언들을 모아놓은 객체임.
    const freeChampions: Champions = Object.fromEntries(
      Object.entries(champions).filter(([_, champion]: [string, Champion]) =>
        freeChampionIds.includes(Number(champion.key))
      )
    );

    return freeChampions;
  } catch (error) {
    throw new Error("챔피언 로테이션 데이터 가져오는 중 에러발생함.");
  }
}
