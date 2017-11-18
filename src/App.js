import React, { Component } from 'react';

import Header from './Header';
import TodosContainer from './TodosContainer';
import AddTodoContainer from './AddTodoContainer';

class App extends Component {

  state = {
    todos: [
      {id: 0, title:'New Todo', isDone:false},
      {id: 1, title:'Todo Done', isDone:true},
      {id: 2, title:'Old Todo', isDone:false}
     ]
  }

  deleteTodo = (index) => {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    })
  }

  addNewTodo = (content) => {
    this.setState({
      todos: this.state.todos.concat({
        id: this.state.todos.length + 1,
        title: content,
        isDone: false
      })
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="sub-container">
          <TodosContainer myTodos={this.state.todos} onDetele={this.deleteTodo} />
          <AddTodoContainer onAddTodo={this.addNewTodo}/>
        </div>
      </div>
    )
  }

}

export default App;
