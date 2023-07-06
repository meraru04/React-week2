```bash
📂 src
┣  App.jsx
┣ 📂components
┃   ┣  Detail.jsx   : 상세페이지 컴포넌트
┃   ┣  GlobalStyle.jsx : 전역 스타일 컴포넌트
┃   ┣  Header.jsx : 헤더 부분 컴포넌트
┃   ┣  InputTodo.jsx : 인풋 컴포넌트
┃   ┣  Main.jsx : 메인페이지 컴포넌트
┃   ┣  TodoList.jsx : todolist 컴포넌트
┃   ┗  TodoMap.jsx : working, done 타입에 따른 todolist
┣ 📂hook
┃   ┣ useFoundData.jsx : defail페이지 컴포넌트에서 사용하는 커스텀 훅
┃   ┗ useInput.jsx : input 컴포넌트에서 사용하는 커스텀 훅
┣ 📂redux
┃   ┣ config
┃   ┃   ┗ configStore.js : 전역 스토어 설정 js파일(ducks패턴방법, react-toolkit방법 작성)
┃   ┗ modules
┃       ┗ todo.js : todolist의 리듀서 함수
┗ 📂shared
    ┗ Router.js : 라우터 설정 컴포넌트
```
