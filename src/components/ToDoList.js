import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList(props) {
  let items = [];

  if (props.tasks)
    for (let i = 0; i < props.tasks.length; i++)
      items.push(
        <ToDoItem
          key={i}
          indx={i}
          data={props.tasks[i]}
          deleteTask={props.deleteTask}
          modifyTask={props.modifyTask}
        />,
      );

  return (
    <div id='list'>
      <h2>List of To-Do Tasks: </h2>
      {items}
    </div>
  );
}

export default ToDoList;