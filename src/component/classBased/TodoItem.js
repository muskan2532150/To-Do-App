import { useState } from 'react';
import styles from "./TodoItem.module.css";

export default function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  }

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  const handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  }

  const { id, title, completed } = props.todo
  return (
    <li className={styles.item} >
      <div onDoubleClick={handleEditing.bind()} style={viewMode}>
        <input type="checkbox" checked={props.todo.completed}
          onChange={() => props.handleChangeProps(id)}
          className={styles.checkbox}
        />
        <span style={completed ? completedStyle : null}> {title}
        </span>
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
      </div>
      <input type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={e => { props.setUpdateProps(e.target.value, id) }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  )
}
