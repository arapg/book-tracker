import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BookDetails() {
    const {id} = useParams();
    const {data: book, isLoading } = useFetch(`http://localhost:3500/books/${id}`);
    const navigate = useNavigate();

    const deleteBook = (id) => {
        fetch(`http://localhost:3500/books/${id}`, {method: 'DELETE'})
            .then(() => {
                navigate('/');
            })
    };

    const markRead = (id) => {
        fetch(`http://localhost:3500/books/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "read": true
                }
            )
        }).then(() => {
            window.location.reload(false);
        })
    }

    const markUnread = (id) => {
        fetch(`http://localhost:3500/books/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "read": false
                }
            )
        }).then(() => {
            window.location.reload(false);
        })
    }

    return (
        <div className="book-detail-container">
            {isLoading && <p>Loading book...</p>}
            {book && (
            <div className="book-detail">
                <div className="book-cover">
                    <img src={book.cover} alt={book.title}/>
                </div>
                <div className="book-information">
                    <h1>{book.title}</h1>
                    <span className="tag">{book.category}</span>
                    <p>Author: {book.author}</p>
                    <p>Status: {book.read === false ? 'Not read' : 'Finished'}</p>
                    <button onClick={() => markRead(book.id)}>Mark as read</button><br/>
                    <button onClick={() => markUnread(book.id)}>Mark as unread</button><br/>
                    <button onClick={() => deleteBook(book.id)}>Delete book</button>
                </div>
                
            </div>)}
            
        </div>
    );
};

export default BookDetails;