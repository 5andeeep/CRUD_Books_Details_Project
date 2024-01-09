import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AddBook from './Components/AddBook';
import UpdateBookDetails from './Components/UpdateBookDetails';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/add' Component={AddBook} />
          <Route path='/books/:id' Component={UpdateBookDetails} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
