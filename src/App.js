import './App.css';
import NavBar from './components/NavBar'
import Movie from './components/Movie'
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details'
import { useState } from 'react';
function App() {
  const [search,setSearch] = useState('')
  return (
    <div className="App">
      <NavBar setSearch={setSearch}/>
      <Routes>
        < Route index element={<Movie search={search}/>}></Route>
        <Route path={`/movie/:id`} element ={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
