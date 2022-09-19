import TodoItem from "./TodoItem";
import React from 'react'

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} 
        handleChangeProps={props.handleChangeProps} 
        deleteTodoProps={props.deleteTodoProps} 
        setUpdateProps={props.setUpdateProps}
        />
      ))}
    </ul>
  )
}
