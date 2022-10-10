import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Course from './pages/Course';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>

    
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={<Course/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
