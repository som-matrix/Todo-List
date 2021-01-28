import React,{useState} from 'react'
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {textFade,buttonFade,childButton} from '../Animation'
function TodoList() {
    const [todos,setTodos] = useState([]);
    const [showTodos,setShowTodos] = useState('All');
    // Add the Todos to our Todo List
    const addTodo = (todo) =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodoArray = [todo,...todos];
        setTodos(newTodoArray)
    }
    // Complete or edit or cross off todo
    const completeTodoToggle = (id) =>{
        
        let toggleTodo =todos.map(todo=>{
            if(todo.id === id){
                todo.complete = !todo.complete
            }
            return todo;
        })
        setTodos(()=>toggleTodo);
    }
    // All the completed/all/active Todos will render in the screen
    let newTodosList = [];
    if(showTodos === "All"){
        newTodosList = todos;
    }
    else if(showTodos === 'Active'){
        newTodosList = todos.filter(todo=>!todo.complete);
    }
    else if(showTodos === 'Completed'){
        newTodosList = todos.filter(todo=>todo.complete);
    }
    // render the filterd todos on click
    const todoShowHandler = (s)=>{
        setShowTodos(s);
    }
    // Delete a Todo from the list
    const deleteTodoHandler = (id)=>{

        let deletedList = todos.filter(todo=> todo.id !== id);
        setTodos(()=>deletedList)
    }
    return (
        <StyledList>
            <StyledActive>
             <h2>Active Todos <span>{todos.filter(todo=>!todo.complete).length}</span></h2>
           </StyledActive>
           <motion.h1 variants={textFade} initial="hidden" animate="show">What's your plan up for today</motion.h1>
           <TodoForm onSubmit={addTodo}/>
           <div>
             {newTodosList.map(todo=>(
                <Todo 
                 todoTexts={todo}
                 id={todo.id} 
                 key={todo.id} 
                 toggleCompleteTodo={()=> completeTodoToggle(todo.id)} 
                 deleteTodoHandler={()=>deleteTodoHandler(todo.id)}
                />
              ))}
           </div>
           <StyledButtonsDiv variants={buttonFade} initial="hidden" animate="show">
             <motion.button variants={childButton} onClick={()=>todoShowHandler('All')}>All Todos</motion.button>
             <motion.button variants={childButton} onClick={()=>todoShowHandler('Active')}>Active todos</motion.button>
             <motion.button variants={childButton} onClick={()=>todoShowHandler('Completed')}>Completed Todos</motion.button>
           </StyledButtonsDiv>
        </StyledList>
    )
}

const StyledList = styled(motion.div)`
 min-height:100vh;
 background: #e0e0e0;

 h1{
     text-align:center;
     padding:4rem 0;
     text-transform:uppercase;
     color:#333;
     letter-spacing:0.2rem;
 }
`
const StyledActive  = styled(motion.div)`
    h2{
     letter-spacing:0.2rem;
     color:#333;
     font-size:1.5rem;
     text-transform:uppercase;
     padding: 2rem 2rem;
     span{
         display:block;
         color:inherit;
         font-size:1.3rem;
         margin:1rem 0 0 5rem;
     }
 }
`
const StyledButtonsDiv = styled(motion.div)`
 display:flex;
 justify-content:center;
 align-items:center;

 button{
     outline:none;
     border:none;
     padding: 2rem 2.5rem;
     margin: 2rem 2rem;
     border-radius:1.5rem;
     cursor: pointer;
     color:#333;
     font-size:1.5rem;
     font-family:'Roboto',sans-serif;
     font-weight:bold;
     box-shadow:  20px 20px 60px #c1c1c1,
     -20px -20px 60px #ffffff;
 }
 @media screen and (max-width:620px){
    flex-direction:column;
 }
`
export default TodoList

