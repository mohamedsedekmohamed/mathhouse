import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import math1 from "../../assets/op.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticlesBackground from ".././../Ui/ParticlesBackground";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Systems", path: "/systems" },
    { name: "Diagnostic", path: "https://login.mathshouse.net/DiaExam" },
    { name: "Exams", path: "/exams" },
    { name: "Questions", path: "/questions" },
    { name: "Live", path: "https://login.mathshouse.net/my_login/live/my" },
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
          <div data-aos="fade-right">
            <Link to="/">
              <img src={math1} alt="Logo" className="  w-28  sm:w-36 md:w-40 lg:48 pt-2  h-20 sm:h-24 md:h-28 lg:h-32  " />
            </Link>
          </div>

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
  <AnimatePresence mode="wait" initial={false}>
    {isOpen ? (
      <motion.div
        key="close"
        initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <HiX size={28} className="text-one" />
      </motion.div>
    ) : (
      <motion.div
        key="menu"
        initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <HiMenu size={28} className="text-one" />
      </motion.div>
    )}
  </AnimatePresence>
</button>

          </div>
        </div>
      </div>

    {isOpen && (
  <div
    className="absolute top-20 right-0 h-screen w-[80%] md:hidden shadow-lg overflow-hidden bg-transparent z-50"
  >
    {/* خلفية Particles */}
    <div className="absolute inset-0">
      <ParticlesBackground />
    </div>

    {/* المحتوى */}
    <div className="relative z-10 py-4 px-5 space-y-3">

      {navLinks.map((link, index) => (
        <Link
          key={link.name}
          to={link.path}
          onClick={() => setIsOpen(false)}
          className={`block px-3 py-2 rounded-md transition duration-300 relative font-medium 
            ${
              isActive(link.path)
                ? "text-one after:w-full"
                : "text-white hover:text-one after:w-0 hover:after:w-full"
            }
            after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-one after:rounded after:transition-all after:duration-300
          `}
        >
          {link.name}
        </Link>
      ))}

      <a
        href="https://login.mathshouse.net/login"
        className="block w-full px-4 py-2 border border-white rounded-md text-one font-medium hover:bg-gray-100 transition mt-2"
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
  </div>
)}

    </nav>
  );
};

export default Navbar;
