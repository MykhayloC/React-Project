import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className="nav-link">Users</NavLink>
                        </li>
                        <li>
                            <NavLink to='/posts' className="nav-link">Posts</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="main-container">
                <main>
                    <Outlet/>
                </main>
            </div>
            <footer className="footer">
                <p>All rights reserved</p>
            </footer>
        </>
    );
};

export default Layout;
