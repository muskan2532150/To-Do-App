import { useState } from 'react'

export default function InputTodo(props) {
  const [title, setTitle] = useState("");

 const onChange = e=>{
    setTitle(e.target.value)
};

const handleSubmit = (e)=>{
  e.preventDefault();
  if (title.trim()) {
    props.addTodoItemProps(title);
    setTitle("")
  } else {
    alert("Please write item");
  }
};

  return (
    <form onSubmit={handleSubmit} className='form-container' > 
    <input type="text" placeholder='Add Todo...' value={title} 
    onChange={onChange} className='input-text'/>
    <button className='input-submit'>Submit</button>
</form>
  )
}
