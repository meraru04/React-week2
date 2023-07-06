import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id : 1,
        title : '리액트 배우기(1)',
        context: '리액트 너무 어렵네여?(1)',
        isDone : false,
    },
    {
        id : 2,
        title : '리덕스 사용법도 힘들어요(2)',
        context : '그래도 해봐야죠(2)',
        isDone : true,
    }
]

const todoSlice = createSlice({
    name : 'todolist',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            return [...state, action.payload]
        },
        deleteTodo : (state,action) => {
            return state.filter( (todo)=> {
                return todo.id !== action.payload
            })
        },
        toggleTodo : (state, action) => {
            return state.map((todo) => {
                if(todo.id === action.payload){
                    return {...todo, isDone: !todo.isDone}
                }
            return todo;
            })
        },
        default : (state, action) => {return state}
    }
})

export const setTodo = (state) => state.todoSlice;
export const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer


// const ADD_TODO = 'todo/ADD_TODO';
// const DELETE_TODO = 'todo/DELETE_TODO'
// const TOGGLE_TODO = 'todo/TOGGLE_TODO'

// export const addTodo = (payload) => {
//     return {
//         type: ADD_TODO,
//         payload,
//     }
// }

// export const deleteTodo = (payload) => {
//     return {
//         type: DELETE_TODO,
//         payload
//     }
// }

// export const toggleTodo = (payload) => {
//     return {
//         type: TOGGLE_TODO,
//         payload
//     }
// }

// const initialValue = [
//     {
//     id : 1,
//     title : '리액트 연습하기',
//     context : '리액트 공부하기',
//     isDone : false,
//     },
//     {
//         id : 2,
//         title : '리액트 연습하기2',
//         context : '리액트 공부하기2',
//         isDone : false,
//     },   
//     {
//         id : 3,
//         title : '리액트 연습하기3',
//         context : '리액트 공부하기3',
//         isDone : true,
//     },
// ]


// const todoList = (state = initialValue, action) => {
//     switch(action.type){
//         case ADD_TODO:
//             return [...state, action.payload]
//         case DELETE_TODO:
//             return state.filter((todo) => {
//                 return todo.id !== action.payload;
//             })
//         case TOGGLE_TODO:
//             return state.map((todo) => {
//                 if(todo.id === action.payload){
//                     return {...todo, isDone: !todo.isDone}
//                 }
//                 return todo;
//             })
//         default:
//             return state
//     }
// }

// export const setTodo = (state) => state.todoList
// export default todoList