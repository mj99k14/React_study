# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 설정

**모든 응답은 반드시 한국어로 작성한다.**

## 프로젝트 개요

패스트캠퍼스 강의 실습용 **예산 계산기(Budget Calculator)** React 앱. Create React App 기반이며 클래스형 컴포넌트를 사용한다.

## 명령어

```bash
npm start        # 개발 서버 실행 (localhost:3000)
npm run build    # 프로덕션 빌드
npm test         # 테스트 실행 (watch 모드)
npm test -- --watchAll=false  # 테스트 1회 실행 후 종료
```

## 아키텍처

- **`src/App.js`** — 루트 클래스형 컴포넌트. 전체 상태(지출 목록, 총지출)를 보유하며 레이아웃을 구성한다.
- **`src/components/ExpenseForm.js`** — 지출 항목 입력 폼 컴포넌트
- **`src/components/ExpenseList.js`** — 지출 목록을 렌더링하는 컴포넌트
- **`src/components/ExpenseItem.js`** — 개별 지출 항목 컴포넌트 (ExpenseList 내부에서 사용)

데이터 흐름: `App` → (props) → `ExpenseForm` / `ExpenseList` → `ExpenseItem`

## 코드 스타일

- 클래스형 컴포넌트(`class Foo extends Component`) 사용 — 함수형으로 전환하지 않는다.
- CSS는 `App.css`, `index.css`에 직접 작성한다 (CSS 모듈 미사용).
