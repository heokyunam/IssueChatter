issue-chatter

INTRO
- 채팅을 하다 생각난 이슈들을 바로 추가할 수 있는 프로그램을 만드는 것이 목표
- front : React + React Hooks + Typescript + Redux + SASS + NextJS(예정)
- backend(예정) : graphql + typescript + nodemon + express-session + MariaDB
- deploy(예정) : docker + jenkins + jenkins github hooks

TO-DO
frontend
1. <strike>Issue페이지에 Todo 수정 기능 추가하기</strike>
2. Issue Drag 이동(https://codesandbox.io/s/3x04qwj6vm?file=/src/hooks/useDrag.js:0-1226)
   1. 순서 무시하고 이동만 가능하게
   2. 순서 반영
   3. 드래그시 해당 순서에 공백을 보여줌(Trello처럼)
3. 상단 셀렉트박스를 통해 Project, User 선택 => 선택은 팝업으로!(ㅠㅠ)
4. 가입, 로그인 기능 추가
5. 유저 초대 기능 추가
6. Project, User 관리 추가
7. 모바일 CSS
8. NextJS 처리
9.  (추가사항) 채팅사항을 이슈, TODO로 반영
10. (추가사항) 캘린더 추가
11. (추가사항) TODO 뷰를 따로 볼 수 있게
12. (추가사항) 사람별로 오늘 일을 얼마나 했는지. 팀별로 1주일동안 일을 얼마나 했는지
13. (추가사항) 한사람이 너무 일을 몰아서 하는건 아닌지 알수 있게(기획필요)

backend
1. AWS RDS 접속 및 테이블 생성
2. expressjs or graphql, RDS(MariaDB)를 통해 DB 연동
3. 메뉴 Issue => Projects, Users로 분리
4. 로그인 세션(https://benjaminwoojang.medium.com/graphql-yoga-%EC%85%8B%EC%97%85-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-427c0e4d5ad6)

deploy
1. docker
2. jenkins
3. jenkins + github hooks