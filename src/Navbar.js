import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Book Tracker</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/add">add books</Link>
                <Link to="/books">all books</Link>
            </div>
        </nav>
    );
}

export default Navbar;