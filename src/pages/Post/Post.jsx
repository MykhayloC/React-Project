import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

const Post = () => {
    const [post, setPost] = useState({});
    const [error, setError] = useState('');
    const {postId} = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

                if (!response.ok) {
                    throw new Error('HTTP-request error!')
                }

                const data = await response.json();
                setPost(data);
            } catch (e) {
                setError(e.message);
            }
        }
        fetchPost();
    }, [postId])

    return (
        <div>
            {error &&
                <div>
                    <h2 className="error-header">Oops!..</h2>
                    <p className="error-message">{error}!</p>
                </div>
            }
            {post &&
                <div className="post" key={post.id}>
                    <h6 className="post-header" >{post.title}</h6>
                    <p className="post-body">{post.body}</p>
                </div>
            }
        </div>
    );
}

export default Post;
