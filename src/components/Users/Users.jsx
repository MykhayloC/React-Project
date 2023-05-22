import {useState, useEffect} from "react";
import './Users.css';

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {


        const getUsers = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error ('HTTP error')
                }

                const data = await response.json();
                setUsers(data);
            } catch (e) {
                setError(e.message)
            } finally {
                setIsLoading(false)
            }
        }
        getUsers();
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
            {users && users.map(user =>
                <div className={"user"} key={user.id}>
                    <h6 className={"user-header"} >Name: {user.name}</h6>
                    <p className={"user-body"}>Email: {user.email}</p>
                    <p className={"user-body"}>Phone-number: {user.phone}</p>
                    <p className={"user-body"}>City: {user.address.city}</p>
                    <p className={"user-body"}>Company: {user.company.name}</p>
                </div>
            )}
        </div>
    );
}

export default Users;