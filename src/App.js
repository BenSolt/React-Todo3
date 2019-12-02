import React from 'react';

const data = [
  {
    name:'Start',
    id:1,
    purchased: false
  },
  {
    name:'second',
    id:2,
    purchased: false
  },
  {
    name:'third',
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
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
