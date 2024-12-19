# Riot API를 활용한 리그 오브 레전드 정보 앱

## 프로젝트 소개


### 주요 목표

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

---

## 프로젝트 기술 스택

<div style="display:flex">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" style="margin-right: 5px">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"  style="margin-right: 5px">
<img src="https://img.shields.io/badge/Tanstack%20Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"  style="margin-right: 5px">
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=black"  style="margin-right: 5px">
</div>

---

```
📦 lol
├── 🗂️ **app**                     # 페이지 및 라우팅 관련 폴더
│   ├── 🗂️ **champions**          # 챔피언 관련 페이지
│   │   ├── 📄 `page.tsx`         # 챔피언 목록 (ISR)
│   │   ├── 🗂️ **[id]**          # 개별 챔피언 상세 페이지
│   │   │   └── 📄 `page.tsx`     # 챔피언 상세 (동적 라우팅)
│   ├── 🗂️ **rotation**           # 챔피언 로테이션 페이지
│   │   ├── 📄 `page.tsx`         # 챔피언 로테이션 (CSR)
│   │   ├── 📄 `global-error.tsx` # 에러 처리 페이지
│   ├── 🗂️ **items**              # 아이템 관련 페이지
│   │   └── 📄 `page.tsx`         # 아이템 목록 (SSG)
├── 🗂️ **components**              # 재사용 가능한 컴포넌트
│   ├── 🗂️ **cards**              # 카드 UI 컴포넌트
│   │   ├── 📄 `ChampionCard.tsx`       # 챔피언 카드
│   │   ├── 📄 `ChampionDetailCard.tsx` # 챔피언 상세 카드
│   │   └── 📄 `ItemCard.tsx`           # 아이템 카드
│   ├── 🗂️ **layout**             # 레이아웃 관련 컴포넌트
│   │   ├── 📄 `Header.tsx`             # 헤더
│   │   ├── 📄 `Footer.tsx`             # 푸터
│   │   └── 📄 `ThemeToggle.tsx`        # 다크모드 토글
│   ├── 🗂️ **status**             # 상태 표시 컴포넌트
│       ├── 📄 `ErrorScreen.tsx`        # 에러 화면
│       └── 📄 `LoadingSpinner.tsx`     # 로딩 스피너
├── 🗂️ **types**                   # 타입 정의 파일
│   ├── 📄 `Champion.ts`                # 챔피언 타입 정의
│   ├── 📄 `ChampionRotation.ts`        # 로테이션 타입 정의
│   ├── 📄 `Item.ts`                    # 아이템 타입 정의
├── 🗂️ **utils**                   # 유틸리티 함수 모음
│   ├── 📄 `riotApi.ts`                 # Riot API 유틸리티
│   └── 📄 `serverApi.ts`               # 서버 호출 유틸리티
├── 🗂️ **styles**                  # 스타일 파일
│   └── 📄 `globals.css`               # 전역 스타일
├── 📄 `.env`                       # 환경 변수 (API 키 등)
└── 📄 `README.md`                  # 프로젝트 설명서
```



## 각 페이지 구현 및 렌더링 방식 설명

### 1. 챔피언 목록 (`/champions`)
- **렌더링 방식**: ISR (Incremental Static Regeneration)
- **설명**: 모든 챔피언의 기본 정보를 리스트로 표시합니다. 데이터는 일정 주기로 새로 업데이트됩니다.

### 2. 챔피언 상세 (`/champions/[id]`)
- **렌더링 방식**: 동적 라우팅
- **설명**: 특정 챔피언의 세부 정보를 동적으로 가져오며, 챔피언 ID에 따라 URL이 변경됩니다.

### 3. 챔피언 로테이션 (`/rotation`)
- **렌더링 방식**: CSR (Client-Side Rendering)
- **설명**: 매주 제공되는 무료 챔피언 목록을 클라이언트에서 실시간으로 조회합니다.

### 4. 아이템 목록 (`/items`)
- **렌더링 방식**: SSG (Static Site Generation)
- **설명**: 게임 내 모든 아이템의 정보를 정적 페이지로 미리 생성하여 제공합니다.
