import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import math1 from "../../assets/mathlogo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/Courses" },
    { name: "Diagnostic", path: "https://login.mathshouse.net/login" },
    { name: "Exams", path: "/exams" },
    { name: "Questions", path: "/questions" },
    { name: "Live", path: "https://login.mathshouse.net/login" },
    { name: "About ", path: "/About" },
    { name: "Contact us ", path: "/ContactUs" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="shadow-md sticky top-0 z-50 " data-aos="fade-down">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div data-aos="fade-right">
            <Link to="/">
              <img src={math1} alt="Logo" className="  w-24 md:w-28 sm:w-36 h-12 md:h-16 sm:h-18 " />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 px-2 justify-center space-x-6 lg:space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium  md:text-[11px] lg:text-[14px] transition duration-300 
                  ${
                    isActive(link.path)
                      ? "text-one after:w-full"
                      : "text-gray-700 hover:text-one after:w-0 hover:after:w-full"
                  }
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-one after:rounded after:transition-all after:duration-300
                `}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex space-x-3 " data-aos="fade-left">
            <a
              href="https://login.mathshouse.net/login"
              className=" px-3 lg:px-5 py-1 lg:py-2 border border-one rounded-lg text-one font-medium hover:bg-gray-100 transition duration-300"
            >
              Login
            </a>
            <a
              href="https://login.mathshouse.net/sign_up"
              className="px-3 lg:px-5 py-1 lg:py-2 bg-one text-white rounded-lg font-medium hover:bg-red-700 transition duration-300"
            >
              Signup
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden" data-aos="fade-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <HiX size={28} className="text-one" />
              ) : (
                <HiMenu size={28} className="text-one" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
        {isOpen && (
          <div className=" absolute h- z-200 w-[80%] right-0 md:hidden bg-white shadow-lg py-4 px-5 space-y-3"

          >
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md transition duration-300 relative font-medium 
                  ${
                    isActive(link.path)
                      ? "text-one after:w-full"
                      : "text-gray-700 hover:text-one after:w-0 hover:after:w-full"
                  }
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-one after:rounded after:transition-all after:duration-300
                `}
                data-aos="fade-left"
                // data-aos-delay={index * 100}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://login.mathshouse.net/login"
              className="block w-full px-4 py-2 border border-one rounded-md text-one font-medium hover:bg-gray-100 transition mt-2"
            >
              Log in
            </a>
            <a
              href="https://login.mathshouse.net/sign_up"
              className="block w-full px-4 py-2 bg-one text-white rounded-md font-medium hover:bg-red-700 transition mt-2"
            >
              Sign up
            </a>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
