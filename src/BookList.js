import { Link } from "react-router-dom";

const BookList = ({ books }) => {

    return (
        <div className="book-list">
            {books.map((book) => (
                <div className="book-card" key={book.id}>
                    <Link to={`https://cdn-icons-png.flaticon.com/512/3771/3771361.png/books/${book.id}`}>
                        <img src={book.cover} alt={book.title}/>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BookList;