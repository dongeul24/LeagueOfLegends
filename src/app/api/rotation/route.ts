import { NextResponse } from 'next/server';
import { ChampionRotation } from '@/types/ChampionRotation';

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: '에러발생!! API key 가 없음음.' }, { status: 500 });
  }

  try {
    const response = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9,ko;q=0.8',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://developer.riotgames.com',
        'X-Riot-Token': apiKey
      }
    });

    if (!response.ok) {
      throw new Error('에러발생!! Champion rotation data 가져오기 실패함.');
    }

    const data: ChampionRotation = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      // instanceof Error를 사용해서 런타임 시 그 error 객체 타입을 확인함.
      // 그래서 error가 Error 객체인지 확인하고 맞으면 error.message 반환하고 아니면, 기본 메세지 반환함.
      { error: error instanceof Error ? error.message : '에러 발생' },
      { status: 500 }
    );
  }
}
