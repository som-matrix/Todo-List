import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash,faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { motion } from 'framer-motion';
function Todo({todoTexts,toggleCompleteTodo,deleteTodoHandler}) {

    return(
        <MainDiv>
         <StyledTodo className="todo">
            <h2 style={{textDecoration:todoTexts.complete ? "line-through" :""}} onClick={toggleCompleteTodo} key={todoTexts.id}>{todoTexts.text}</h2>
            <div className="icons">
             <FontAwesomeIcon 
               style={{marginRight:'2rem'}} 
               cursor="pointer" color="#00416d" 
               onClick={toggleCompleteTodo} 
               size="2x"
               icon={faPencilAlt}
               />
             <FontAwesomeIcon 
              cursor="pointer" 
              color="#ec4646" 
              onClick={deleteTodoHandler} 
              size="2x"
              icon={faTrash}
              />
            </div>
         </StyledTodo>
        </MainDiv>
       
    )
}
const MainDiv = styled.div`
 margin:2rem 0;
`
const StyledTodo = styled(motion.div)`
 width:45%;
 padding:2rem 3rem;
 display:flex;
 justify-content:space-between;
 align-items:center;
 flex-wrap:wrap;
 margin:auto;
 border-radius:1.1rem;
 box-shadow:  20px 20px 60px #c1c1c1,
             -20px -20px 60px #ffffff;
 h2{
     font-size:1.8rem;
     color:#333;
     letter-spacing:0.1rem;
     font-weight:lighter;
     cursor: pointer;
 }

 @media screen and (max-width:1200px){
     .icons{
         margin:auto;
         padding-top:1rem;
     }
     h2{
         text-align:center;
     }
     
 }
 @media screen and (max-width:620px){
     width:95%;
 }

`
export default Todo
