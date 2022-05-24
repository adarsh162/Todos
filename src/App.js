
import './App.css';
import Header from "./Mycomponent/Header";
import ToDos from "./Mycomponent/ToDos";
import Footer from "./Mycomponent/Footer";
import Addtodos from "./Mycomponent/Addtodos";
import About from "./Mycomponent/About";
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("On Delete todo", todo);
    settodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addtodos = (title, desc) => {
    console.log("Adding this todo", title);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      Desc: desc,
    }
    console.log(mytodo);
    settodos([...todos, mytodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);//whenever todos will be changed this use effect hook will be called immediately
  return (
    <>
      <Router>
      <Header title="My Todo list" />
      <Switch>
          <Route exact path="/" render={()=>{
            return (
            <>
            <Addtodos addtodos={addtodos} />
            <ToDos todos={todos} onDelete={onDelete} />
            </>)
      
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

     

      <Footer />
      </Router>
    </>
  );
}

export default App;
