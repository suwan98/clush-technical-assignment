# 클러쉬 프론트엔드 개발자 2차 과제 Calender Application

<br />

## 1. 프로젝트 설명

- React와 TypeScript를 통해 개발된 캘린더 애플리케이션
- 사용자는 일정을 추가,조회,삭제할 수 있으며, 캘린더 상에서 일정을 시각적으로 확인할 수 있다.

### 1.1 핵심 기능

- 월간 캘린더
- 일정 추가 기능
- 일정 조회 기능
- 일정 삭제 기능
- 선택한 날짜의 일정 목록 표시
- 한국어 로케일 지원

#### 1.2 사용 라이브러리

- React
- TypeScript
- Ant Desing
- Vite
- Dayjs

<br />
<br />

## 2. 프로젝트 실행 방법

1. 의존성 설치

```bash
pnpm install
```

2. 개발 서버 실행

---

```bash
pnpm dev
```

3. 브라우저에서 http://localhost:5174 접속

<br />
<br />

## 3. 컴포넌트 구조 및 사용 이유

- `App`: 최상위 컴포넌트
- `Calender` : 달력 애플리케이션의 컨테이너 컴포넌트
- `EventList`: 선택된 날짜의 일정 목록을 표시하는 컴포넌트
- `EventForm`: 새 일정을 추가하기 위한 폼 컴포넌트
- `EventListHeader`: 일정 목록의 헤더를 표시하는 컴포넌트

<br />
<br />

## 4. 개발 과정에서의 고민과 해결

**1. 날짜 처리**

- 날짜와 시간을 어떻게 효과적으로 다룰것인가에 대한 고민을 하였으며 이에 `Dayjs`라이브러리를 통해 날짜 연산과 포맷팅을 간편히 처리했다.
