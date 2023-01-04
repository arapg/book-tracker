import { Link } from "react-router-dom";

const BookList = ({ books }) => {

    return (
        <div className="book-list">
            {books.map((book) => (
                <div className="book-card" key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <img src={book.cover} alt={book.title}/>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BookList;