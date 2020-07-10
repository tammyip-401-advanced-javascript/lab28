import React from 'react';

import Form from 'react-bootstrap/Form';

function ToDoItem(props) {
  return (
    <div id='item'>
      <p>Task: {props.data.text}</p>

      <p>Assign To: {props.data.assignee}</p>

      <p>Difficulty: {props.data.difficulty}</p>

      <button
        onClick={() => {
          props.deleteTask(props.indx);
        }}
      >
        Delete Task
            </button>

      <Form.Group controlId={'todo-status-' + props.indx}>
        <Form.Label>Status: </Form.Label>
        <Form.Check
          value={props.data.complete}
          type='switch'
          onChange={() => {
            let newTask = { ...props.data };
            newTask.complete = !newTask.complete;
            props.modifyTask(props.indx, newTask);
          }}
          id={'status-switch-' + props.indx}
          label={props.data.complete ? 'incomplete' : 'complete'}
        />
      </Form.Group>
    </div>
  );
}

export default ToDoItem;