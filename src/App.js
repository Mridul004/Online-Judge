import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Problems from './Components/Problems';
import logo from './download.jpeg';
import Stats from './Components/Stats';
import EasyProblems from './Components/EasyProblems';
import MediumProblems from './Components/MediumProblems';
import HardProblems from './Components/HardProblems';
import Contest from './Components/Contest';
import Learn from './Components/Learn';
import About from './Components/About';
import Signup from './Components/Signup';
import ProblemPage from './Components/ProblemPage';


function App() {
  return (
    <>
     <nav className="navbar">
      <img className='image' src={logo} alt="Online Judge" />
        <div ><span className="navbar__logo"><a href="/Home">Online Judge</a></span></div>
        <ul className="navbar__links">
            <li><a href="/Problems">Problems</a></li>
            <li><a href="/Stats">Statistics</a></li>        
            <li><a href="/ProblemPage">About</a></li>
            <li> <a href="/Signup"><button className="navbar__add-button">Log In</button></a></li>
        </ul>
    </nav>  
      <Router>  
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Problems' element={<Problems/>}></Route>
          <Route path='Stats' element={<Stats/>}></Route>
          <Route path='EasyProblems' element={<EasyProblems/>}></Route>
          <Route path='MediumProblems' element={<MediumProblems/>}></Route>
          <Route path='HardProblems' element={<HardProblems/>}></Route>
          <Route path='Contest' element={<Contest/>}></Route>
          <Route path='Learn' element={<Learn/>}></Route>
          <Route path='About' element={<About/>}></Route>
          <Route path='Signup' element={<Signup/>}></Route>
          <Route path='ProblemPage' element={<ProblemPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
