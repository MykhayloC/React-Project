import {useState, useEffect} from "react";
import './Posts.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {


        const getPosts = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                if (!response.ok) {
                    throw new Error ('HTTP error')
                }

                const data = await response.json();
                setPosts(data);
            } catch (e) {
                setError(e.message)
            } finally {
                setIsLoading(false)
            }
        }
        getPosts();
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
                {posts && posts.map(post =>
                    <div className={"post"} key={post.id}>
                        <h4 className={"post-header"}>{post.title}</h4>
                        <p className={"post-body"} >{post.body}</p>
                    </div>
                )}
            </div>
        );
    }

    export default Posts;