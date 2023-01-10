import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Book Tracker</h1>
            <div className="links">
                <Link to="/book-tracker">home</Link>
                <Link to="/book-tracker/add">add books</Link>
                <Link to="/book-tracker/books">all books</Link>
            </div>
        </nav>
    );
}

export default Navbar;