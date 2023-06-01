import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                if (!response.ok) {
                    throw new Error('HTTP-request error!')
                }

                const data = await response.json();
                setPosts(data);
            } catch (e) {
                setError(e.message);
            }
        }
        fetchPosts();
    }, [])

    return (
        <div>
            {error &&
                <div>
                    <h2 className="error-header">Oops!..</h2>
                    <p className="error-message">{error}!</p>
                </div>
            }
            <div className="content-box">
            {posts && posts.map(post =>
                <div className="post" key={post.id}>
                    <Link to={`/posts/${post.id}`} className="post-header" >{post.title}</Link>
                </div>
            )}
            </div>
        </div>
    );
}

export default Posts;