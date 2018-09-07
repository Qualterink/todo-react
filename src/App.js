import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodos from './components/AddTodos';

class App extends Component {
  state = {
    todoList: [
      { id:1, content:'Just... do it!', done: false },
      { id:2, content:'Someone else', done: false }
    ],
    added: 2,
    removed: 0
  }
  addTodos = (todo) => {
    todo.id = Math.random() + Date.now();
    let todos = [...this.state.todoList, todo];
    this.setState({
      todoList: todos,
      added: this.state.added + 1
    })
  }
  deleteTodos = (id) => {
    const todos = this.state.todoList.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todoList: todos,
      removed: this.state.removed + 1
    })
  }
  doneTodos = (todo) => {
    if(todo.done === false){
      todo.done = true;
    }else{
      todo.done = false;
    }
    this.setState({
      todoList: this.state.todoList
    })  
  }
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <h1 className="head-title">First React Todo App</h1>
        </div>
        <div className="container">
          <Todos todoList={this.state.todoList} deleteTodos={this.deleteTodos} doneTodos={this.doneTodos}/>
          <div>
            <p>Added: {this.state.added}</p>
            <p>Removed: {this.state.removed}</p>
          </div>
          <AddTodos addTodos={this.addTodos}/>
        </div>
      </div>
    );
  }
}

export default App;
