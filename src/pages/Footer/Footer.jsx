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

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <footer className="bg-[#fff7f6] text-gray-700">
      {/* Main Footer */}
      <div className="max-w-screen-xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {/* Contact */}
        <div data-aos="fade-up">
          <img src={math1} alt="Maths House" className="w-32 mb-6" />
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
    { name: "About ", path: "/About" },
    { name: "Contact ", path: "/ContactUs" },
  ].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href={item}
                    className="hover:text-one hover:pl-1 transition block"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-bold mb-4">PROGRAMS</h3>
          <ul className="space-y-3 text-sm">
            {["Nanodegree Plus", "Veterans", "Georgia", "Self-Driving Car"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-one hover:pl-1 transition block"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-bold mb-4">SUPPORT</h3>
          <ul className="space-y-3 text-sm">
            {["Documentation", "Forums", "Language Packs", "Release Status"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-one hover:pl-1 transition block"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
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
                <p className="text-sm text-gray-500">Get it on</p>
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
