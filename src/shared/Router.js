import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../components/Detail';
import Main from '../components/Main';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router