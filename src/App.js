import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './homepage/Homepage';
import Search from './search/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/search" element={<Search />} />
        <Route path="/connect" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
