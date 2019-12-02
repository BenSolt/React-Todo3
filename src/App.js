import React from 'react';

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
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
