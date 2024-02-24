import './App.css';
import MovieList from './MovieList/MovieList';
import Navigation from './Navigation/Navigation';
import {moviesData} from './Data';
import { useState } from 'react';
import AddMovie from './AddMovie/AddMovie';
import FilterMovie from './FilterMovie/FilterMovie';
import { Route, Routes } from 'react-router-dom';
import Features from './Pages/Features';
import Pricing  from './Pages/Pricing';
import Errorpage from './Pages/Errorpage';
import Description from './Pages/Description';
function App() {
  const [movies, setMovies] = useState(moviesData)

  const [inputSearch, setInputSearch] = useState('')

  const [newRate, setNewRate] = useState(0)

  const add = (newMovie) =>{
      setMovies([...movies, newMovie])
  }


  return (
    <div className="App"> 
      <Navigation />
      <Routes>
        <Route path= "/Features" element={ <Features />}/>
        <Route path= "/Pricing" element={ <Pricing />}/>
        <Route path= "/Description/:id" element={<Description />}/>
        <Route path= "/*" element={ <Errorpage />}/>
      </Routes>
      <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch} newRate={newRate} setNewRate={setNewRate}/>
      <AddMovie add={add}/>
      <MovieList movies={movies} inputSearch={inputSearch} newRate={newRate}/>
      

    </div>
  );
}

export default App;
