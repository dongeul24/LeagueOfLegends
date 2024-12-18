"use server";

import { Champions } from "@/types/Champion";
import { ChampionDetail, ChampionDetails } from "@/types/ChampionDetails";
import { Items } from "@/types/Item";


// 최신 버전을 가져오는 함수
export async function getLatestVersion(): Promise<string> {
  try {
    const versionRes = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    if (!versionRes.ok) {
      throw new Error("버전 data 가져오기 실패");
    }
    const versions: string[] = await versionRes.json();

    // 최신 버전 가져오기
    const latestVersion: string = versions[0];
    return latestVersion;
  } catch (error) {
    throw new Error("버전 관련 데이터를 가져오는 중 에러발생함.");
  }
}


//모든 챔피언의 정보를 가져오는 함수 
export async function fetchChampions(): Promise<Champions> {
  try {
    const version = await getLatestVersion();
    const championListRes = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );

    if (!championListRes.ok) {
      throw new Error("챔피언 리스트 데이터 가져오기 실패함.");
    }
    const championsData = await championListRes.json();
    const champions: Champions = championsData.data;

    return champions;
  } catch (error) {
    throw new Error("챔피언 리스트 데이터 가져오는 중 에러발생함.");
  }
}

// 특정 챔피언의 상세 정보를 가져오는 함수
export async function fetchChampionDetail(
  id: string
): Promise<ChampionDetail> {
  try {
    const version = await getLatestVersion();

    const championDetailRes = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
    );

    if (!championDetailRes.ok) {
      throw new Error("챔피언 상세 데이터 가져오기 실패함.");
    }

    const championDetailData = await championDetailRes.json();
    const championDetails: ChampionDetails = championDetailData.data;
    const championDetail: ChampionDetail = championDetails[id];

    return championDetail;
  } catch (error) {
    throw new Error("챔피언 상세 데이터 가져오는 중 에러발생함");
  }
}

//모든 아이템의 정보를 가져오는 함수
export async function fetchItemList(): Promise<Items> {
  try {
    const version = await getLatestVersion();

    const itemRes = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );

    if (!itemRes.ok) {
      throw new Error("아이템 데이터 가져오기기 실패");
    }
    const itemData = await itemRes.json();
    const items: Items = itemData.data;

    return items;
  } catch (error) {
    throw new Error("아이템템 데이터 가져오는 중 에러발생함");
  }
}
