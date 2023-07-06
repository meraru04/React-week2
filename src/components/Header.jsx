import React from 'react'
import styled from 'styled-components';


function Header() {
  return (
    <HeaderBox>
        <h2>My small TodoList</h2>
        <span>React Redux</span>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 0 15px;
    border : 1px solid #eee;
    border-radius : 15px;
`

export default Header