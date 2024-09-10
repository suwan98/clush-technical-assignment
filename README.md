# 클러쉬 프론트엔드 개발자 1차 과제 Todo Application

![Todo Application ReadMe Gif](https://github.com/user-attachments/assets/790dea16-877a-4e29-828c-21c05f2287aa)

<br />

## 1. 프로젝트 설명

### 1.1 핵심 기능

**useTodo 커스텀 훅**

- 해당 애플리케이션의 전반적인 상태와 기능을 관리하는 핵심적인 커스텀 훅
  - 할 일 항목에 대한 상태 관리
  - 할 일 추가, 삭제, 완료 토글 기능 구현
  - 전체 삭제 기능
  - 필터링 기능(모든 할일 / 완료된 할 일)

#### 1.2 사용 라이브러리

- React
- TypeScript
- uuid
- Ant Desing
- Vite

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
├── 📂src
│   ├── 📂components
│   │   ├── 📂common
│   │   │   ├── Button.tsx
│   │   │   ├── ClearAllButton.tsx
│   │   │   └── Input.tsx
│   │   └── 📂 todo
│   │   │   ├── TodoContainer.tsx
│   │   │   ├── TodoForm.tsx
│   │   │   └── TodoItem.tsx
│   │   │   └── TodoList.tsx
│   ├── 📂 hooks
│   │   └── useTodo.ts
│   ├── 📂 types
│   │   └── Todo.ts
│   └── 📂 utils
│   └── App.tsx
│   └── main.tsx
```

- `App`: 최상위 컴포넌트, 전체 레이아웃 관리
- `TodoContainer`: Todo 애플리케이션의 주요 컨테이너 컴포넌트
- `TodoForm`: 새로운 할 일 입력 폼
- `TodoList`: 할 일 목록 표시 및 관리
- `TodoItem`: 개별 할 일 항목 표시
- `ClearAllButton`: 모든 할 일 삭제 기능

**이러한 구조를 선택한 이유는?**

- 관심사 분리 : 각 컴포넌트가 독립적으로 특정 기능에만 집중할 수 있도록 구성함.
- 재사용성 : 작은 단위의 컴포넌트로 분리해 재사용에 용이하게 함.
- 유지보수성 : 컴포넌트 별로 독립적인 관리를 가능케 함.

<br />

## 4. 개발 과정에서의 고민과 해결

### 1. 상태 관리

- 고민 : 전역 상태 관리 라이브러리의 사용 여부
- 해결 : 애플리케이션 규모를 고려해 useTodo 커스텀 훅으로만 상태를 관리하는것으로 결정

### 2. 타입 안정성

- 고민 : any 타입 사용을 최소화하고 타입 안정성을 확보
- 해결 : 컴포넌트들에 대한 인터페이스를 정의함으로 명확한 타입을 지정
