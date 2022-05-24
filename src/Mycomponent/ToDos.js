import React from 'react'
import {ToDoitem} from "../Mycomponent/ToDoitem";

export const ToDos = (props) => {
  return (
    <div className='container'>
      <h3 className="my-3">ToDos List</h3>
      {props.todos.length===0?"No Todos to Display":
      props.todos.map((todo)=>{
      return( <ToDoitem todo={todo}  key={todo.sno} onDelete={props.onDelete}/> )
      
      })
    }
    
    </div>   
  )
}

export default ToDos
