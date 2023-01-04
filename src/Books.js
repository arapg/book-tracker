import { useState, useEffect } from 'react';
import BookList from './BookList';

function Books() {
    const [category, setCategory] = useState('');
    const [sortBy, setSortBy] = useState('');

    const [books, setBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    let url = 'http://localhost:3500/books/';

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBooks(data);
                setIsLoading(false);
            });
    }, [url]);

    function filterBooks(e) {
        e.preventDefault();
        let parameter = `?category=${category}`;
        url += parameter;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBooks(data);
            });
    };

    function sortBooks(e) {
        e.preventDefault();
        let parameter = `?_sort=${sortBy}`;
        url += parameter;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBooks(data);
            });
    }

    

    

    return (
        <div className="home">
            <div className="sort-filter">
                <form>
                    <label>Filter by category</label><br/>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <optgroup label="Fiction">
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="children">Children</option>
                        <option value="comedy">Comedy</option>
                        <option value="contemporary">Contemporary</option>
                        <option value="dystopia">Dystopia</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="history">History</option>
                        <option value="horror">Horror</option>
                        <option value="mystery">Mystery</option>
                        <option value="paranormal">Paranormal</option>
                        <option value="romance">Romance</option>
                        <option value="scifi">Science Fiction</option>
                        <option value="thriller">Thriller</option>
                        <option value="YA">YA</option>
                    </optgroup><optgroup label="Non-fiction">
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="cookbook">Cookbook</option>
                        <option value="guide">Guide</option>
                        <option value="health">Health</option>
                        <option value="memoir">Memoir</option>
                        <option value="relationships">Relationships</option>
                        <option value="self-help">Self-Help</option>
                        <option value="travel">Travel</option>
                    </optgroup>
                    </select>
                    <button onClick={filterBooks}>Filter</button>
                </form>
                <form>
                    <label>Sort by</label><br/>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="category">Category</option>
                        <option value="read">Read</option>
                    </select>
                    <button onClick={sortBooks}>Sort</button>
                </form>
            </div>
            {isLoading && <p>Loading books...</p>}
            {books && <BookList books={books}/>}
        </div>
    );
}

export default Books;