import {useState} from "react";
import Button from "./components/Button/Button.jsx";
import Header from "./components/Header/Header.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Todos from "./components/Todos/Todos.jsx";
import Users from "./components/Users/Users.jsx";



function App() {
    const [posts, showPosts] = useState(false);
    const [postsValue, changePostsValue] = useState("Show");
    const [todos, showTodos] = useState(false);
    const [todosValue, changeTodosValue] = useState("Show");
    const [users, showUsers] = useState(false);
    const [usersValue, changeUsersValue] = useState("Show");

    const toggleButtonValue = (buttonValue, changeButtonValue) => {
        buttonValue === "Show" ? changeButtonValue("Hide") : changeButtonValue("Show");
    }
    const handlePostsButton = () => {
      toggleButtonValue(postsValue, changePostsValue);
      showPosts(!posts);
    };
    const handleTodosButton = () => {
      toggleButtonValue(todosValue, changeTodosValue);
      showTodos(!todos);
    };
    const handleUsersButton = () => {
      toggleButtonValue(usersValue, changeUsersValue);
      showUsers(!users);
    }


    return (
        <div>
            <Header>Render data from API</Header>

            <div className={"buttons"}>
                <Button myClass={"button"} onClick={handlePostsButton}>{postsValue} posts</Button>
                <Button myClass={"button"} onClick={handleTodosButton}>{todosValue} todos</Button>
                <Button myClass={"button"} onClick={handleUsersButton}>{usersValue} users</Button>
            </div>
            <div className={"container"}>
                {posts && <Posts/>}
                {todos && <Todos/>}
                {users && <Users/>}
            </div>
        </div>
    );
}

export default App
