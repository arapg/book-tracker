import Navbar from './Navbar';
import Home from './Home';
import AddBooks from './AddBooks';
import Books from './Books';
import { Route, Routes } from 'react-router-dom';
import BookDetails from './BookDetails';


function App() {
  return (
    <>
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddBooks/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/books/:id" element={<BookDetails/>}/>
        </Routes>
        
      </div>
    </>
  );
}

export default App;
