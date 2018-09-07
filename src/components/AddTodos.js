import React, { Component } from 'react';

class AddTodos extends Component {
    state = {
        content: '',
        done: false
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        if(this.state.content.length < 1){
            e.preventDefault();
        }else{
            this.props.addTodos(this.state);
            this.setState({
                content: '',
                done: false
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <label htmlFor="content" className="add-todo-title">Add new task</label>
                    <input id="content" className="add-todo-content" onChange={this.handleChange} value={this.state.content} placeholder="Enter the text..."/>
                    <button className="add" onClick={this.handleClick}>Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodos;