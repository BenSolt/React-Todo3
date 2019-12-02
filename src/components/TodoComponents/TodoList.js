// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todos.map(item => (
                <Todo
                    key={item.id}
                    item1={item}
                    togglePurchased={props.togglePurchased}
                />
            ))}
            <button className='clear-Btn' onClick={props.clearPurchased1}>
                Clear Purchased
            </button>
        </div>
    );
};

export default TodoList;