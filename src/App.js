import React, { useState, useEffect } from "react";

//Components
import Header from "./components/Header";
import Todo from "./components/Todo";
import Loader from "./components/Loader";

//Styles
import "./styles/App.css";

const App = () => {
  //STATE
  const [todoList, setTodoList] = useState([]);
  const [filtrado, setFiltrado] = useState (null);


  //EFFECT

  useEffect(() => {
    const handleTodoList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos")
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      // setTimeout(() => {
      setTodoList(resultTodoList)
      setFiltrado(resultTodoList)
      // }, 2000);
    };
    handleTodoList();
    
  }, []);

  //FUNCIONES

  const handleFilter = (estado) => {
    if(estado === "all"){
      setFiltrado(todoList)

    }else if(estado === "completed"){
      
      setFiltrado(todoList.filter((e) => e.completed === true))
         
    }else if (estado === "reset"){
      setFiltrado(todoList.filter( (e) => e.completed === false))
    }
    
  }
 
  
  const handleCompleteTodo = (id) => {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    setFiltrado(filtrado.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  };


 
  return (
    <div className="App">
      <Header 
      handleFilter={handleFilter}
      />

      <div className="todo-container">
        {
          filtrado && filtrado.length > 0 ? (
          filtrado.map(singleTodo => (
            <Todo
              key={singleTodo.id}
              title={singleTodo.title}
              id={singleTodo.id}
              status={singleTodo.completed}
              handleCompleteTodo={handleCompleteTodo}
            />
          ))
        ) : (<Loader />)
        }
      </div>
    </div>
  );
};

export default App;
