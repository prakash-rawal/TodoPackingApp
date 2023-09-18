import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'

function TaskList({ toDoList, handleToggle, handleFilter, removeItem }) {
  const handleCheckboxChange = (id) => {
    handleToggle(id);
  };

  const handleDelete = (id) => {
    removeItem(id);
  };

  return (
    <div className="todo">
      <div className="checkbox-text">
        {toDoList.map((todo) => (
          <div key={todo.id} className={todo.complete ? "strike" : ""}>
              <input
                className="larger"
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleCheckboxChange(todo.id)}
              />
              {todo.select} {todo.task}
              <FontAwesomeIcon icon={faXmark} style={{color: "#f11e1e"}} onClick={() => handleDelete(todo.id)} className="cross"/>
          </div>
        ))}
         </div>
      
      <div className="btn">
        <button  className="clear-btn" onClick={handleFilter}>Clear List</button>
      </div>
    </div>
  );
}

export default TaskList;


