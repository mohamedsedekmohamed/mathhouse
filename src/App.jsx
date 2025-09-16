
import './App.css'
import Home from './pages/Home/Home'
import Courses from './pages/Home/Courses'
import Navbarhome from "./pages/Nav/Navbarhome";
import Category from './pages/Home/Category'
import About from './pages/Home/Aboutus'
import Contect from './pages/Home/Contect';
import Exams from './pages/Home/Exams';
import Questions from './pages/Home/Questions';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import { FaBatteryFull } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function App() {
  return (
<div className='max-w-screen overflow-hidden '>
  <Router>
    <Navbarhome />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/About" element={<About />} />
      <Route path="/ContactUs" element={<Contect />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>

    {/*  البطارية ثابتة */}
    <div className="fixed bottom-4 right-4 z-10   rounded-full p-2 flex flex-col gap-3" >
      <a href="https://www.tiktok.com/@mramirhemaida" target="_blank" rel="noopener noreferrer">
  <FaTiktok className="text-one w-5 h-5 hover:text-red-500 transition" />
</a>

<a href="https://www.facebook.com/people/Maths-House-SAT-WAY/61577409492649/?sk=reels_tab" target="_blank" rel="noopener noreferrer">
  <FaFacebookSquare className="text-one w-5 h-5 hover:text-blue-600 transition" />
</a>

<a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp className="text-one w-5 h-5 hover:text-green-500 transition" />
</a>

<a href="https://www.youtube.com/@MathsHouse244/shorts" target="_blank" rel="noopener noreferrer">
  <FaYoutube className="text-one w-5 h-5 hover:text-red-600 transition" />
</a>

    </div>

    <Footer />
  </Router>
</div>

  )
}

export default App
