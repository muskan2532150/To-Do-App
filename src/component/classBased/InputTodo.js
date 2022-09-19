import React, { Component } from 'react'

export default class InputTodo extends Component {
    state = {
    title : ""    
    }

    onChange = e=>{
        this.setState({
                title: e.target.value
        });
    };

    handleSubmit = (e)=>{
          e.preventDefault();
          if (this.state.title.trim()) {
            this.props.addTodoItemProps(this.state.title);
            this.setState({
              title: "",
            })
          } else {
            alert("Please write item")
          }
    };

  render() {
    return (
        <form onSubmit={this.handleSubmit} className='form-container' > 
        <input type="text" placeholder='Add Todo...' value={this.state.title} 
        onChange={this.onChange} className='input-text'/>
        <button className='input-submit'>Submit</button>
    </form>
    )
  }
}


