import { useState } from "react";

function AddBooks() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    const [category, setCategory] = useState('action');
    const [read, setRead] = useState('false');

    const clearFields = () => {
        setTitle('');
        setAuthor('');
        setCover('');
        setCategory('action');
        setRead('false');
    }

    const submitForm = (e) => {
        e.preventDefault();
        const newBook = {title, author, cover, category, read};

        fetch('https://my-json-server.typicode.com/arapg/book-tracker-database/books', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newBook)
        }).then(() => {
            alert('The book was successfully added!');
        });

        clearFields();
    }

    return (
        <div className="add">
            <h2>Add new book</h2>
            <form onSubmit={submitForm}>
                <label>Title:</label><br/>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/><br/><br/>

                <label>Author:</label><br/>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required/><br/><br/>

                <label>Link to book cover:</label><br/>
                <input type="text" value={cover} onChange={(e) => setCover(e.target.value)} required/><br/><br/>

                <label>Category:</label><br/>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
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
                </select><br/><br/>

                <label>Have you read the book?</label>
                <select value={read} onChange={(e) => setRead(e.target.value)} required>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select><br/><br/>

                <button>Add book!</button>
                
            </form>
        </div>
    );
}

export default AddBooks;