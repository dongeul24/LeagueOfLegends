# Riot API를 활용한 리그 오브 레전드 정보 앱
![image](https://github.com/user-attachments/assets/dceefc74-0052-415b-831b-35b90c17d49b)

웹사이트 바로가기: https://league-of-legends-app-delta.vercel.app/


![리그오브레전드 백과사전 - 데스크탑](https://github.com/user-attachments/assets/53a74f30-08e4-437f-ac66-bd9d06d6fdc0)

![리그 오브 레전드 백과사전 - 모바일](https://github.com/user-attachments/assets/ad73e10a-e5bb-4cbf-91c4-b10b4cc5a9d9)


### 웹사이트 소개 전에 리그 오브 레전드(League of Legend)란?
![image](https://github.com/user-attachments/assets/d5bfaec9-9a69-4c65-ac39-bb400f8321a2)

  리그 오브 레전드는 Riot Games에서 개발한 세계적인 멀티플레이어 온라인 배틀 아레나(MOBA) 게임으로, 2009년 출시 이후 꾸준히 사랑받고 있습니다. 게임은 두 팀(각 5명)이 소환사의 협곡에서 경쟁하며 상대의 넥서스를 파괴하는 것을 목표로 합니다.
  
### Riot이 제공해주는 API:
Riot Games는 개발자를 위해 다양한 데이터를 제공하는 공식 API를 제공합니다.
이번 프로젝트에서 API를 활용해서 아래와 같은 정보들을 사용할 수 있었습니다.

- 챔피언 정보: 각 챔피언의 이름, 스킬, 능력치 등
- 게임 로테이션: 주간 무료 챔피언 로테이션 목록
- 아이템 데이터: 게임 내 사용 가능한 아이템의 상세 정보
- 유저 데이터: 소환사 정보, 랭킹, 게임 기록 등

자세한 내용은 아래 링크를 통해 API 관련 DOCS를 확인할 수 있습니다.
https://developer.riotgames.com/docs/lol


## 웹사이트 소개
이 프로젝트는 Riot Games의 공식 API를 활용하여 **리그 오브 레전드(League of Legends)**와 관련된 다양한 정보를 제공하는 간단한 웹 애플리케이션입니다.
사용자는 챔피언, 아이템, 주간 로테이션 등 게임 데이터에 쉽게 접근할 수 있으며, 효율적인 데이터 로딩 방식과 사용자 경험을 고려한 UI를 통해 다양한 게임 정보를 확인할 수 있습니다.

### 주요 목표
+ Riot API를 활용하여 게임 데이터 제공
+ 효율적인 데이터 로드 방식을 적용 (ISR, CSR, SSG 등)
+ 사용자 친화적인 UI/UX 제공
+ 다크 모드와 같은 사용자 맞춤 설정 기능 지원
+ 코드 재사용성과 유지보수성을 고려한 구조 설계
---

## 주요 기능

1. **챔피언 목록 조회**  
   모든 챔피언의 기본 정보를 한눈에 확인할 수 있습니다.

2. **챔피언 상세 정보 조회**  
   특정 챔피언의 능력, 스토리 및 게임 플레이 정보를 확인할 수 있습니다.

3. **챔피언 로테이션 조회**  
   매주 무료로 플레이 가능한 챔피언 목록을 제공합니다.

4. **아이템 목록 조회**  
   게임 내 아이템의 상세 정보를 확인할 수 있습니다.

5. **다크모드**  
   사용자 환경에 맞춘 다크모드 및 반응형 UI를 제공합니다.

6. **반응형 디자인**
   모바일 환경에서 보기좋게 디자인했습니다.

---

## 프로젝트 기술 스택

<div style="display:flex">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" style="margin-right: 5px">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"  style="margin-right: 5px">
<img src="https://img.shields.io/badge/Tanstack%20Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"  style="margin-right: 5px">
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=black"  style="margin-right: 5px">
</div>

---

## 파일 구조(파일 트리)
```
📦 lol
├── 🗂️ app                     # 페이지 및 라우팅 관련 폴더
│   ├── 🗂️ champions          # 챔피언 관련 페이지
│   │   ├── 📄 page.tsx         # 챔피언 목록 (ISR)
│   │   ├── 🗂️ [id]          # 개별 챔피언 상세 페이지
│   │   │   └── 📄 page.tsx     # 챔피언 상세 (동적 라우팅)
│   ├── 🗂️ rotation           # 챔피언 로테이션 페이지
│   │   ├── 📄 page.tsx         # 챔피언 로테이션 (CSR)
│   │   ├── 📄 global-error.tsx # 에러 처리 페이지
│   ├── 🗂️ items              # 아이템 관련 페이지
│   │   └── 📄 page.tsx         # 아이템 목록 (SSG)
├── 🗂️ components              # 재사용 가능한 컴포넌트
│   ├── 🗂️ cards              # 카드 UI 컴포넌트
│   │   ├── 📄 ChampionCard.tsx       # 챔피언 카드
│   │   ├── 📄 ChampionDetailCard.tsx # 챔피언 상세 카드
│   │   └── 📄 ItemCard.tsx           # 아이템 카드
│   ├── 🗂️ layout             # 레이아웃 관련 컴포넌트
│   │   ├── 📄 Header.tsx             # 헤더
│   │   ├── 📄 Footer.tsx             # 푸터
│   │   └── 📄 ThemeToggle.tsx        # 다크모드 토글
│   ├── 🗂️ status             # 상태 표시 컴포넌트
│       ├── 📄 ErrorScreen.tsx        # 에러 화면
│       └── 📄 LoadingSpinner.tsx     # 로딩 스피너
├── 🗂️ types                   # 타입 정의 파일
│   ├── 📄 Champion.ts                # 챔피언 타입 정의
│   ├── 📄 ChampionRotation.ts        # 로테이션 타입 정의
│   ├── 📄 Item.ts                    # 아이템 타입 정의
├── 🗂️ utils                   # 유틸리티 함수 모음
│   ├── 📄 riotApi.ts                 # Riot API 유틸리티
│   └── 📄 serverApi.ts               # 서버 호출 유틸리티
├── 🗂️ styles                  # 스타일 파일
│   └── 📄 globals.css               # 전역 스타일
├── 📄 .env                       # 환경 변수 (API 키 등)
└── 📄 README.md                  # 프로젝트 설명서
```



## 각 페이지 구현 및 렌더링 방식 설명

### 1. 챔피언 목록 (`/champions`)
- **렌더링 방식**: ISR (Incremental Static Regeneration)
- **설명**: 모든 챔피언의 기본 정보를 리스트로 표시합니다. 데이터는 일정 주기로 새로 업데이트됩니다.

### 2. 챔피언 상세 (`/champions/[id]`)
- **렌더링 방식**: SSR (Server Side Rendering)
- **설명**: 특정 챔피언의 세부 정보를 동적으로 가져오며, 챔피언 ID에 따라 URL이 변경됩니다.

### 3. 챔피언 로테이션 (`/rotation`)
- **렌더링 방식**: CSR (Client-Side Rendering)
- **설명**: 매주 제공되는 무료 챔피언 목록을 클라이언트에서 실시간으로 조회합니다.

### 4. 아이템 목록 (`/items`)
- **렌더링 방식**: SSG (Static Site Generation)
- **설명**: 게임 내 모든 아이템의 정보를 정적 페이지로 미리 생성하여 제공합니다.

## 프로젝트 진행 중 생긴 트러블 슈팅 정리
블로그 : https://heyday2024.tistory.com/82
