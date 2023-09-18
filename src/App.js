import React, { useState } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskList from "./Tasklist";
import Footer from "./Footer";
import './todo.css';

const App = () => {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (data) => {
    setToDoList(prevList => [
      ...prevList, data
    ]);
  }

  const handleToggle = (id) => {
    setToDoList(prevList => {
      return prevList.map(task =>
        task.id === id ? { ...task, complete: !task.complete } : task
      );
    });
  }

  const handleFilter = () => {
   const msg = window.confirm("Are You Sure???");
   if( msg ){
    // setToDoList(prevList => prevList.filter(task => !task.complete));
    setToDoList([]);
   }
  }

  const removeItem = (id) => {
    setToDoList((prevList) => {
      const updatedList = prevList.filter((task) => task.id !== id);
      return updatedList;
    });
  };
  
  return (
    <div className="App">
      <Header />
      <AddTask addTask={addTask} />
      <TaskList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} removeItem={removeItem} />
      <Footer toDoList={toDoList} />
    </div>
  );
}

export default App;
