# 클러쉬 프론트엔드 개발자 2차 과제 Calender Application

<br />

![Calender Application ReadMe Gif](https://github.com/user-attachments/assets/693947fc-602f-4ef6-82c9-0482622fe893)

## 1. 프로젝트 설명

- React와 TypeScript를 통해 개발된 캘린더 애플리케이션
- 사용자는 일정을 추가,조회,삭제할 수 있으며, 캘린더 상에서 일정을 시각적으로 확인할 수 있다.

### 1.1 주요 기능

- 직관적인 캘린더 뷰: `AntDesing Calneder` 컴포넌트를 통해 사용자가 한 눈에 월별 일정을 파악 용이
- 일정 관리 기능:
  - 새 일정 추가: 모달을 통한 간편한 일정 입력
  - 일정 조회: 선택한 날짜의 모든 일정을 리스트 형태로 확인
  - 일정 삭제: 각 일정 항목에 대한 삭제 기능

반응형 디자인: 다양한 디바이스에서 최적화된 사용자 경험 제공
한국어 로케일 지원: 날짜와 요일을 한국어로 표시

#### 1.2 사용 라이브러리

- React
- TypeScript
- Ant Desing
- Vite
- Dayjs

<br />

## 2. 프로젝트 실행 방법

1. 의존성 설치

```bash
pnpm install
```

2. 개발 서버 실행

```bash
pnpm dev
```

3. 브라우저에서 http://localhost 접속

<br />

## 3. 컴포넌트 구조 및 사용 이유

```
📦 src
├── 📂 components
│ ├── Calendar
│ ├── EventList
│ ├── EventForm
│ └── EventListHeader
├── 📂 types
├── 📂 utils
├── App.tsx
└── main.tsx
```

- `App`: 최상위 컴포넌트, 전체 상태 관리
- `Calender` : 달력 애플리케이션의 핵심 컴포넌트
- `EventList`: 선택된 날짜의 일정 목록을 표시하는 컴포넌트
- `EventForm`: 새 일정을 추가하기 위한 모달 폼 컴포넌트
- `EventListHeader`: 선택된 날짜 및 일정 개수를 표시하는 헤더 컴포넌트

<br />
<br />

## 4. 개발 과정에서의 고민과 해결

**1. 날짜 처리**

- `Moment.js`에 비해 가벼운 번들 사이즈
- 타입 및 국제화(i18n) 지원
- 날짜와 시간을 어떻게 효과적으로 다룰것인가에 대한 고민을 하였으며 이에 `Dayjs`라이브러리를 통해 날짜 연산과 포맷팅을 간편히 처리했다.
