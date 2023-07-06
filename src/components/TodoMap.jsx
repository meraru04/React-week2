import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, setTodo, toggleTodo } from '../redux/modules/todo';
import styled from 'styled-components';


function TodoMap({type}) {
    
    const todolist = useSelector(setTodo);
    const dispatch = useDispatch();

    const delBtnHandler = (id) => {
        dispatch(deleteTodo(id))
    }

    const toggleBtnHandler = (id) => {
        dispatch(toggleTodo(id))
    }

    return (
        <TodoWrap>
            {todolist.filter((todo) => {
                return type === todo.isDone
            }).map((todo) => {
                return (
                    <TodoBox key={todo.id}>
                        <div style={{width : '100%'}}>
                            <Link to={`/detail/${todo.id}`} key={todo.id}>상세페이지</Link>
                            <h4>{todo.title}</h4>
                            <p>{todo.context}</p>
                        </div>
                        <BtnBox>
                            <BtnHandle onClick={() => delBtnHandler(todo.id)}>삭제하기</BtnHandle>
                            <BtnHandle onClick={() => toggleBtnHandler(todo.id)}>{type ? '취소하기' : '완료하기'}</BtnHandle>
                        </BtnBox>
                    </TodoBox>
                )
            })}
        </TodoWrap>
  )
}

const TodoWrap = styled.section`
    display : flex;
    gap : 10px;
    flex-wrap : wrap;
`

const TodoBox = styled.div`
    display : flex;
    flex-direction : column;
    border : 3px solid green;
    width : 350px;
    border-radius : 15px;
    padding : 10px;
    word-break:break-all;
`

const BtnBox = styled.div`
    display : flex;
    justify-content : space-between;
`

const BtnHandle = styled.button`
    border : 3px solid ${(props) => props.children === '삭제하기' ? 'red' : 'skyblue'}
`

export default TodoMap