import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JokeCategoryPage from "./pages/Jokes/JokeCategoryPage";
import StarWarPeoplePage from './pages/StarWar/StartWarPeoplePage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Joke from './components/Jokes/Joke';
import SearchPage from './pages/SearchPage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jokes/categories" element={<JokeCategoryPage />} />
        <Route path="/jokes/joke" element={<Joke />} />
        <Route path="/starwar/people" element={<StarWarPeoplePage />} />
        <Route path = "/search" element={<SearchPage/>} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>

    </Router>
  );
}
