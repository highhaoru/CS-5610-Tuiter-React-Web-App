import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";// import useSelector
import {addTodo, deleteTodo, todoDoneToggle}
    from "./reducers/todos-reducer";
const Todos = () => {
    const todos
        = useSelector(state => state.todos);// retrieve todos from reducer state and assign to
    const [todo, setTodo] = useState({do: ''});
    const dispatch = useDispatch();
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }
    return(       // local todos constant
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {
                    todos.map(todo =>
                        /*
                        // iterate over todos array and render a
                        // line item element for each todo object
                        // display do property containing the todo text
                         */
                        <li className="list-group-item">
                            <button onClick={createTodoClickHandler}
                                    className="btn btn-primary w-25 float-end">
                                Create</button>
                            <input
                                onChange={todoChangeHandler}
                                value={todo.do}
                                className="form-control"/>
                        </li>
                    )
                }
                {
                    todos.map((todo, index) =>
                        <li key={todo._id}
                            className="list-group-item">
                        <button onClick={() =>
                        deleteTodoClickHandler(index)}
                            className="btn btn-danger float-end ms-2">
                        Delete
                        </button>
                        <input type="checkbox"
                            checked={todo.done}
                            onChange={() =>
                            toggleTodoDone(todo)}
                            className="me-2"/>
                        {todo.do}
                    </li>
                    )
                }

            </ul>
        </>
    );
};
export default Todos;

