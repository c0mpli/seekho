import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Course from './pages/Course';
import { Music } from './pages/Music';
import { SpecificCourse } from './pages/SpecificCourse';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>

    
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={<Course/>}></Route>
    <Route path="course/music" element={<SpecificCourse category={"Music"}/>}></Route>
    <Route path="course/frontend web development" element={<SpecificCourse category={"Frontend Web Development"}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
