import styled from 'styled-components'
import useInput from '../hook/useInput';

function InputTodo() {
    const [inputHandler, submitHandler,titleRef,titleState,contextState] = useInput();

    return (
        <InputContainer>
            <InputBox>
                <Label htmlFor='form_title'>
                제목
                <Input type='text' name='title' id='form_title' placeholder='제목을 넣어주세요' value={titleState}
                onChange={inputHandler} ref={titleRef}/>
                </Label>
                <Label htmlFor='form_context'>
                내용
                <Input type="text" name='context' id='form_context' placeholder='내용을 넣어주세요' value={contextState}
                onChange={inputHandler}/>
                </Label>
            </InputBox>       
            <button onClick={submitHandler}>추가하기</button>
        </InputContainer>
      )
    }
    
    const InputContainer = styled.form`
        display : flex;
        flex-direction : row;
        align-items : center;
        background-color : #eee;
        height : 100px;
        border-radius : 10px;
        justify-content : space-between;
        padding : 0 20px;
        width : 100%;
        > button{
            background-color : skyblue;
            color : white;
        }
    `
    
    const InputBox = styled.div`
        display : flex;
        flex-direction : row;
        flex-wrap : wrap;
        gap : 10px;
    `
    
    const Input = styled.input`
        border : none;
        height : 40px;
        width : 260px;
        border-radius : 10px;
        margin-left : 20px;
        padding : 5px;
    `
    
    const Label = styled.label`
        font-weight : 600;
        margin-left : 10px;
    `

export default InputTodo