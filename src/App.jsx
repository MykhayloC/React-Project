import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Users from "./pages/Users/Users.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import User from "./pages/User/User.jsx";
import Post from "./pages/Post/Post.jsx";
import Layout from "./components/Layout.jsx";

function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/users/:userId' element={<User/>}/>
                    <Route path='/posts' element={<Posts/>}/>
                    <Route path='/posts/:postId' element={<Post/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App
