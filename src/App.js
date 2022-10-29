import React, {Component} from 'react';
//import Dropdown from './components/Dropdown/Dropdown'
//import ColorPicker from "./components/ColorPicker";
import TodoList from './components/TodoList'

// const ColorPickerOptions = [
//     {label: 'red', color: '#F44336'},
//     {label: 'green', color: '#4CAF50'},
//     {label: 'blue', color: '#2196F3'},
//     {label: 'grey', color: '#607d8B'},
//     {label: 'pink', color: '#E91E63'},
//     {label: 'indigo', color: '#3F51B5'},
// ];

class App extends Component {
    state = {
        todos:
            [
                {id: 'id-1', test: 'выучить основы React', completed: true},
                {id: 'id', test: 'Разобраться с React Router, ', completed: false},
                {id: 'id+1', test: 'Пережить Redux', completed: false}
            ],
    };

    deleteTodo = (todoId) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }))
    }


    render() {
        const {todos} = this.state
        const completeTodoCount = todos.reduce(
            (total, todo)  => (todo.completed ? total +1 : total),
            0,
            );

        return (

            <>
                <h1>Состоояние компонента</h1>
                {/*<Dropdown />*/}
                {/*<ColorPicker options={ColorPickerOptions} />*/}

                <p>Общее количество todo: {todos.length}</p>
                <p>Количество выполненых todo: {completeTodoCount}</p>

                <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
            </>
        )
    }
}
export default App;