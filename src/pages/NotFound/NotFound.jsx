import {Link} from "react-router-dom";

function NotFound(props) {
    return (
        <>
            <div>Page not found</div>
            <Link to='/'>Home page</Link>
        </>

    );
}

export default NotFound;