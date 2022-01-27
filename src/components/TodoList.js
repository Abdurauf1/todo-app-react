import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
    return (
        <div>
            <ListGroup as='ul'>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        id={todo.id}
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                    />
                ))}
            </ListGroup>
        </div>
    )
}

export default TodoList;
