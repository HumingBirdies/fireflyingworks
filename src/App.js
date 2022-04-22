import React from 'react';
import { Routes, Route, Switch, BrowserRouter as Router } from "react-router-dom";  
import Typography from "@material-ui/core/Typography";
import { NavBar } from './components/common/NavBar/NavBar';
import AboutMePage from './pages/AboutMePage/AboutMePage';
import ArtworkPage from './pages/ArtworkPage/ArtworkPage';
import HomePage from './pages/HomePage/HomePage';
import { Footer } from './components/common/Footer/Footer';
import { Background } from './components/common/Background/Background';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <NavBar/> 

        <Routes>
          <Route path="/"  element={<HomePage/>}/>
          <Route path="/about"  element={<AboutMePage/>}/>
          <Route path="/artwork"  element={<ArtworkPage/>}/>
        </Routes>

       
      </Router>
      <Footer/>
    </>
  );
}

export default App;

