import React from 'react';
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        }
    }

    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('working')
        this.setState({newTodo: ''});
        if(this.state.newTodo === ''){
            return window.alert('add a To do')
        }else{
            return this.props.addTodo1(this.state.newTodo)
        }
    }

    render() {
        console.log('render')
        return(
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='todo'>New Todo</label>
            <input
            type='text'
            name='todo'
            id='todo'
            value={this.state.newTodo}
            onChange={this.handleChanges}
            />
            <button>add a Todo</button>
            </form>
        )
    }

}

export default TodoForm;



