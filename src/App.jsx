import "./App.css"
import TodoName from "../../own-react-app/src/components/Todoname"
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Todoitemcontext from "./store/Todoitemcontext";
// import Todoappcontainer from "./components/Todoappcontainer"


function App() {


  return (
    <>
    <Todoitemcontext>
      <center>
        <TodoName></TodoName>
        </center>
        <div className="container">
        <div className="min-container">
          <AddTodo></AddTodo>
        </div>
        <TodoItems></TodoItems>
      </div> 
      </Todoitemcontext>
    </>
  )
}

export default App
