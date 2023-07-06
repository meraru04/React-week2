import React from 'react'
import TodoMap from './TodoMap';
import styled from 'styled-components';

function TodoList({type}) {
  return (
    <TodoContainer>
        <h4>{type ? 'Done' : 'Working'}</h4>
        <TodoMap type = {type}/>
    </TodoContainer>
  )
}


const TodoContainer = styled.section`
    width : 100%;
    height : 50vh;
    padding : 15px;
    border : 1px solid #eee;
    overflow-y : scroll;
`
export default TodoList