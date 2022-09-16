import React, { Component } from 'react'
import TodosList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";

export default class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  handleChange = (id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        })
      }
    })
  };

  deleteTodo = (id) => {
    this.setState(prevState => {
      return {
        todos: [...prevState.todos.filter(todo => {
          return todo.id !== id;
        })]
      }
    })
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, newTodo]
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoItemProps={this.addTodoItem} />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.deleteTodo} />
      </div>
    )
  }
}
