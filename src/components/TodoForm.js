
import React,{useState}  from 'react';
import shortid from 'shortid';
import {motion} from 'framer-motion';
import styled from 'styled-components';
function TodoForm({onSubmit}) {
    const [inputText,setInputText] = useState('');

    // Add userInputHandler
    const userInputHandler = (e)=>{
        setInputText(e.target.value);
    }
    // AddtodoHandler
    const displayTodoHandler = (e)=>{
        e.preventDefault();

        onSubmit({
            id: shortid.generate(),
            text:inputText,
            complete:false,
        })
        setInputText('')
    }
    return (
       <StyledForm style={{textAlign:'center'}} onSubmit={displayTodoHandler}>
           <input value={inputText} onChange={userInputHandler} type="text" placeholder="Add your todos..."/>
           <button>Add</button>
       </StyledForm>
    )
}

const StyledForm = styled(motion.form)`
 padding:2rem 0;
 input{
     width:35%;
     outline:none;
     border:none;
     padding:1.3rem 2rem;
     margin-right:1rem;
     border-radius: 1rem;
     box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
     background:none;
 }
 button{
     outline:none;
     border:none;
     padding:1.3rem 2rem;
     background-color:#ec4646;
     color:#f6f5f5;
     border-radius: 1rem;
     box-shadow: 0.5rem 0.5rem 0.5rem rgba(51, 51, 51,.1);
 }
 @media screen and (max-width:620px){
    input{
        width:70%;
    }
 }
`
export default TodoForm;
