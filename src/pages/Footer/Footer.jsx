import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import math1 from "../../assets/mathlogo.png";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <footer className="bg-[#fff7f6] text-gray-700">
      {/* Main Footer */}
<div className="px-6 pt-5 flex flex-col lg:flex-row gap-8ر lg:gap-16 items-center lg:items-center text-center lg:text-left">
  {/* اللوجو */}
  <img 
    src={math1} 
    alt="Maths House" 
    className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 mb-4 lg:mb-0 flex-shrink-0"
  />

  {/* النص */}
  <span className=" text-sm sm:text-base lg:text-lg leading-relaxed">
    <strong className="text-one">MathsHouse</strong> is your trusted platform for modern learning.  
    We provide a complete and interactive education experience designed to help students achieve excellence.  
    Learn anytime, anywhere with our comprehensive courses, expert instructors, and innovative tools.
  </span>
</div>


      <div className="max-w-screen-xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Contact */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-bold mb-4">CONTACT</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 hover:text-one transition">
              <FaPhoneAlt className="text-one" />
              <span>123 456 7890</span>
            </li>
            <li className="flex items-center gap-3 hover:text-one transition">
              <FaWhatsapp className="text-one" />
              <span>123 456 7890</span>
            </li>
            <li className="flex items-center gap-3 hover:text-one transition">
              <FaEnvelope className="text-one" />
              <span>support@edumy.com</span>
            </li>
            <li className="flex items-center gap-3 hover:text-one transition">
              <FaMapMarkerAlt className="text-one" />
              <span>
                329 Queensberry Street, <br /> Australia
              </span>
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg font-bold mb-4">COMPANY</h3>
<ul className="space-y-3 text-sm">
  {[
    { name: "Exams", path: "/exams" },
    { name: "Questions", path: "/questions" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/ContactUs" },
  ].map((item, idx) => (
    <li key={idx}>
      <Link
        to={item.path}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:text-one hover:pl-1 transition block"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>

        </div>

   

        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-bold mb-4">Join Us</h3>
        <div className="space-y-3 text-sm">
  <a 
    href="https://www.tiktok.com/@mramirhemaida" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-red-500 transition"
  >
    <FaTiktok className="text-one w-5 h-5 md:w-6 md:h-6" />
    <span className="">TikTok</span>
  </a>

  <a 
    href="https://www.facebook.com/people/Maths-House-SAT-WAY/61577409492649/?sk=reels_tab" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-blue-600 transition"
  >
    <FaFacebookSquare className="text-one w-5 h-5 md:w-6 md:h-6" />
    <span className="">Facebook</span>
  </a>

  <a 
    href="https://wa.me/201234567890" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-green-500 transition"
  >
    <FaWhatsapp className="text-one w-5 h-5 md:w-6 md:h-6" />
    <span className="">WhatsApp</span>
  </a>

  <a 
    href="https://www.youtube.com/@MathsHouse244/shorts" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-red-600 transition"
  >
    <FaYoutube className="text-one w-5 h-5 md:w-6 md:h-6" />
    <span className="">YouTube</span>
  </a>
</div>

        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-lg font-bold mb-4">MOBILE</h3>
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg border border-red-200 shadow-md px-5 py-3 text-one hover:bg-red-50 transition"
            >
              <FaApple className="text-2xl" />
              <div>
                <p className="font-semibold">App Store</p>
                <p className="text-sm text-gray-500">Available now</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg border border-red-200 shadow-md px-5 py-3 text-one hover:bg-red-50 transition"
            >
              <FaGooglePlay className="text-2xl" />
              <div>
                <p className="font-semibold">Google Play</p>
                <p className="text-sm text-gray-500"> Available now</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t border-gray-300 text-center py-5"
      >
        <div className="flex flex-wrap justify-center gap-6 mb-3 text-sm">
          {[
    { name: "Home", path: "/" },
    { name: "Courses", path: "/Courses" },
    { name: "Diagnosticexams", path: "https://login.mathshouse.net/login" },
    { name: "Exams", path: "/exams" },
    { name: "Questions", path: "/questions" },
    { name: "Live", path: "https://login.mathshouse.net/login" },
    { name: "About ", path: "/About" },
    { name: "Contact ", path: "/ContactUs" },
  ].map(
            (item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="hover:text-red-600 transition"
              >
                {item.name}
              </a>
            )
          )}
        </div>
        <p className="text-xs text-gray-500">
          © 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
