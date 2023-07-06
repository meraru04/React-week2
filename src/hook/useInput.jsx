import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo } from "../redux/modules/todo";


const useInput = () => {
    const dispatch = useDispatch();
    const todolist = useSelector(setTodo);
    const titleRef = useRef();

    const [inputState, setInputState] = useState({
        title : '',
        context : '',
    });
    const titleState = inputState.title;
    const contextState = inputState.context;

    const inputHandler = (e) => {
        const {name,value} = e.target
        setInputState({...inputState, [name] : value})
    }

    useEffect(() => {
        titleRef.current.focus();
    },[todolist])

    const submitHandler = (e) => {
        e.preventDefault();
        if(titleState === '' || contextState === ''){
            alert('제목과 내용을 모두 적어주세요')
            setInputState({...inputState, title : '', context : ''})
            titleRef.current.focus();
            return
        }
        const newTodo = {
            id : Date.now(),
            title : titleState,
            context : contextState,
            isDone : false,
        }
        dispatch(addTodo(newTodo))
        setInputState({...inputState, title : '', context : ''})
    }


    return [inputHandler, submitHandler,titleRef,titleState,contextState]
}


export default useInput