import React from 'react';
import BookList from './BookList';
import useFetch from './useFetch';

function Home() {

    const { data: books, isLoading } = useFetch('https://my-json-server.typicode.com/arapg/book-tracker-database/books?_sort=id&_order=desc&_limit=3');

    return (
        <div className="home">
            <div className="welcome">
                <h2>Welcome to Book Tracker!</h2>
                <p>To add books, simply click "add books" in the menu and fill in the details :-)</p>
            </div>
            
            
            <div className="book-collection">
                <h2>Most recent</h2>
                {isLoading && <p>Loading books...</p>}
                {books && <BookList books={books}/>}
            </div>
            
        </div>
    );
};

export default Home;