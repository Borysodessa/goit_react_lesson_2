import React from "react";
import css from "./TodoList.css"

const TodoList = ({todos, onDeleteTodo}) => (
    <ul className="TodoList">{todos.map(({id, test}) => (
            <li key={id} className="TodoList__item">
                <p className="TodoList__text">{test}</p>
                <button onClick={() => onDeleteTodo(id)}>Удалить</button>
            </li>
        )
    )
    }
    </ul>
);

export default TodoList;