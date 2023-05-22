import {useState, useEffect} from "react";
import './Todos.css';

function Todos() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {


        const getTodos = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');

                if (!response.ok) {
                    throw new Error ('HTTP error')
                }

                const data = await response.json();
                setTodos(data);
            } catch (e) {
                setError(e.message)
            } finally {
                setIsLoading(false)
            }
        }
        getTodos();
    }, [])

    return (
        <div>
            {isLoading &&
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
            {error &&
                <div>
                    <h2 className={"error-header"}>Oops!..</h2>
                    <p className={"error-message"}>{error}!</p>
                </div>
            }
            {todos && todos.map(todo =>
                <div className={"todo"} key={todo.id}>
                    <h6 className={"todo-header"}>{todo.title}</h6>
                    <p className={"todo-body"}>{todo.completed ? "Task completed" : "Task uncompleted "}</p>
                </div>
            )}
        </div>
    );
}

export default Todos;