import { Link, Outlet } from "react-router-dom";
import "./App.css";

function Layout() {
    return (
        <>
            <nav className="navbar">
                <h2 className="logo">App</h2>

                <div className="nav-links">
                    <Link to={'/'}>Item</Link>
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

        </>
    );
}

export default Layout;