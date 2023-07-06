import React from 'react'
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import useFoundData from '../hook/useFoundData';

function Detail() {

  // 상세페이지 구현

  // custom hook 적용 및 시도하기
  // hook 폴더의 useFoundData.jsx에서 url 파라미터를 구한후
  // previos, foundData에 이전페이지 이동 함수와 url파라미터와 맞는 todolist를 찾는 함수를
  // 할당받는다.
  const [previos, foundData] = useFoundData()
  
  // 상세페이지 컴포넌트 구조
  return (
    <DetailContainer>
      <GlobalStyle/>
      <DetailBox>
        <button onClick={()=>{previos('/')}}>이전으로</button>
        <h4>{foundData.id}</h4>
        <h2>{foundData.title}</h2>
        <p>{foundData.context}</p>
      </DetailBox>
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
  display : flex;
  height : 100vh;
`

const DetailBox = styled.div`
  border : 3px solid green;
  padding : 15px;
  border-radius : 15px;
  margin : auto;
  width : 500px;
  height : 250px;
  word-break:break-all;
  box-shadow : 10px 10px 0px;
`

export default Detail