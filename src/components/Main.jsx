import React from 'react'
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

function Main() {
  // 메인페이지 todolist를 구성하고 있다.
  return (
    <>
        <GlobalStyle/>
        <MainContainer>
            <Header></Header>
            <InputTodo/>
            <TodoList type={false} title='Working...'/>
            <TodoList type={true} title='Done!'/>
        </MainContainer>
    </>
  )
}

const MainContainer = styled.section`
    max-width : 1200px;
    min-width : 800px;
    margin : auto;
`




export default Main