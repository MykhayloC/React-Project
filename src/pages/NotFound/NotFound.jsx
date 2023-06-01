import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='not-found-page'>
            <h2 className='not-found-title'>Page not found</h2>
            <p>Back to <Link to='/'>Home page</Link></p>
        </div>

    );
}

export default NotFound;