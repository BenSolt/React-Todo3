import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'


const data = [
  {
    name:'Learn CSS,HTML',
    id:1,
    purchased: false
  },
  {
    name:'Learn Javascript',
    id:2,
    purchased: false
  },
  {
    name:'Learn React',
    id:3,
    purchased: false
  }

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: data
    }
  }

  addTodo = name => {
    const newTodo = {
      name: name,
      id: Date.now(),
      purchased: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearPurchased = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.purchased)
    })
  }

  togglePurchased = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id) {
          return {
            ...item,
            purchased: !item.purchased
          }
        }else{
          return item;
        }
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <div className='header'>
          <TodoForm addTodo1={this.addTodo}/>
        </div>
        <div className='body'>
          <TodoList 
          togglePurchased={this.togglePurchased}
          todos={this.state.todos}
          clearPurchased1={this.clearPurchased}
          />
        </div>

      </div>
    );
  }
}

export default App;
