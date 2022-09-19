import React, { Component } from 'react'
import TodosList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from 'uuid';

export default class TodoContainer extends Component {
  state = {
    todos: []
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

  setUpdate = (updatedInput, id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.title = updatedInput
          }
          return todo;
        }),
      }
    });
  }

  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }
  

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }

  render() {
    return (
      <div className='container'>
        <div className="inner">
          <Header />
          <InputTodo addTodoItemProps={this.addTodoItem} />
          <TodosList todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            setUpdateProps={this.setUpdate} />
        </div>
      </div>
    )
  }
}
