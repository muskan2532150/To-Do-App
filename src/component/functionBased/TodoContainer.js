import { useState, useEffect } from 'react';
import TodosList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from 'uuid';

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todos !== this.state.todos) {
  //     const temp = JSON.stringify(this.state.todos)
  //     localStorage.setItem("todos", temp)
  //   }
  // }

export default function TodoContainer() {

  //  same as componentDidMount as dependency on setTodos (change inside the effect for denpendency)

 const firstIntailse = () => {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
  return loadedTodos || []
  };

  const [todos, setTodos] = useState(firstIntailse());

  // same as componentDidUpdate as state or prop as its dependency
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  const handleChange = (id) => {
    setTodos(prevState => prevState.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo;
    })
    )
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter(todo => {
      return todo.id !== id;
    })]
    )
  };


  const setUpdate = (updatedInput, id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.title = updatedInput
      }
      return todo;
    }),
    );
  }

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo])
  }

  return (
    <div className='container'>
      <div className="inner">
        <Header />
        <InputTodo addTodoItemProps={addTodoItem} />
        <TodosList todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          setUpdateProps={setUpdate} />
      </div>
    </div>
  )
}
