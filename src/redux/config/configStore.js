import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../modules/todo';
// import {createStore} from '/redux'
// import {combineReducer} from '/redux'

// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//     todoList,
// })

// const store = createStore(rootReducer)

// configureStore로 작성시 객체에 리듀서 키의 값으로 객체로 리듀서함수들이 존재한다.
// const store = configureStore({
//     reducer: {
//         todoList : todoList,
//     }
// })



const store = configureStore({
    reducer:{
        todoSlice,
    }
})

export default store;