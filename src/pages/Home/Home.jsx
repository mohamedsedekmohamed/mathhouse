import React, { useEffect, useState } from "react";
import axios from "axios";
import svg from "../../assets/svg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import {
  FaFolderOpen,
  FaBookOpen,
  FaListUl,
  FaRegFileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const [courses, setCourses] = useState([]);
  const [box, setBox] = useState("");
  useEffect(() => {
    axios
      .get("https://login.mathshouse.net/api/courses_lists")
      .then((response) => {
        setCourses(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get("https://login.mathshouse.net/home_data")
      .then((response) => {
        setBox(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const features = [
    {
      title: "Skilled Instructors",
      text: "Gain knowledge from expert math teachers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422A12.083 12.083 0 016 8.35M12 14v7m0-7l-6.16-3.422"
          />
        </svg>
      ),
    },
    {
      title: "Customized Learning",
      text: "Lessons tailored to your unique needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6l4 2"
          />
        </svg>
      ),
    },
    {
      title: "Engaging Classes",
      text: "Participate in live, interactive discussions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9 9 0 110-18c4.97 0 9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "Adaptable Scheduling",
      text: "Pick times that work best for you.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Rich Resources",
      text: "Explore a wide range of study materials.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 20l9-5-9-5-9 5 9 5z"
          />
        </svg>
      ),
    },
    {
      title: "Progress Tracking",
      text: "Monitor your improvement with regular assessments and feedback.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-6h13v6m-6-6V7a4 4 0 10-8 0v4"
          />
        </svg>
      ),
    },
  ];
  const items = [
    { name: "Courses", price: box.courses},
    { name: "Chapters", price:  box.chapters },
    { name: "Lessons", price:  box.lessons },
    { name: "Students ", price:  box.students },
    { name: "Teachers ", price: box.teachers },
  ];
const data = [
  {
    id: 1,
    title: "Amr Mohammed",
    desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi diam, egestas sed tellus sed, aliquet cursus arcu”",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    title: "Sarah Johnson",
    desc: "“The math courses here completely transformed my understanding of calculus. The instructors are amazing and very supportive!”",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    title: "John Davis",
    desc: "“I was struggling with algebra for years until I found these courses. Now I'm confident and even enjoying math problems!”",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 4,
    title: "Mona Ali",
    desc: "“The explanations are so clear and simple. I finally feel like I understand geometry instead of just memorizing formulas.”",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    title: "James Carter",
    desc: "“Amazing experience! The practice problems really helped me prepare for my exams with confidence.”",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    id: 6,
    title: "Layla Hassan",
    desc: "“I used to think math was boring, but now I actually enjoy solving problems thanks to these lessons.”",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    id: 7,
    title: "Michael Brown",
    desc: "“The supportive community and helpful teachers make learning math fun and stress-free.”",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 8,
    title: "Huda Ibrahim",
    desc: "“I improved my grades drastically in just a few months. This program is truly life-changing!”",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 9,
    title: "Daniel Smith",
    desc: "“From struggling in class to becoming one of the top students—this is the best decision I ever made.”",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];



  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 2;

  const nextSlide = () => {
    if (startIndex + visibleCards < data.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full max-h-screen bg-cover bg-center bg-white">
        <section className="pt-5 md:pt-28">
          <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
              {/* Left Content */}
              <div data-aos="fade-right" className="space-y-5">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
                  Unlock Your Math Potential <br />
                  <span className="text-one">Expert-Led Courses</span> for
                  Global Students
                </h2>

                <p className="text-lg font-medium text-one">Anywhere</p>

                <p className="text-gray-600 leading-relaxed">
                  Connect With The Most Qualified And Passionate Mentors
                </p>

                <button className="px-6 py-3 bg-one text-white rounded-lg shadow-lg font-medium hover:bg-red-700 transition duration-300">
                  Find Courses
                </button>
              </div>

              {/* Right Image */}
              <div data-aos="fade-left" className="flex justify-center">
                <img
                  src={svg}
                  alt="Math Illustration"
                  className="max-w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Goals Section */}
      <div className="flex flex-col items-center gap-6 p-8">
        <div
          className="w-full md:w-3/4 lg:w-2/3 bg-white rounded-2xl shadow-lg p-6 text-center space-y-4"
          data-aos="fade-up"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-one rounded-full shadow-md mx-auto">
            <LuGoal className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-semibold text-gray-800">
            Achieve your goals
          </h3>

          <p className="text-gray-600 text-sm">
            Empower yourself with our online math courses designed for the
            international education system. Led by experienced and passionate
            instructors, our interactive Zoom sessions cater to all levels and
            learning styles. Whether you're aiming for top grades or preparing
            for exams, we'll guide you to success.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-6 py-10">
        <div
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
          data-aos="fade-down"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-one rounded-full shadow-md mx-auto mb-6">
            <FaGraduationCap className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Benefits
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                data-aos="fade-up"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-one rounded-full shadow-sm mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm mt-2">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className="w-full h-25 flex items-center justify-center"
        data-aos="fade-up"
      >
        <div className="flex items-center w-full justify-around  bg-gradient-to-r from-one via-one/80 to-white">
          <FaAngleDoubleDown className="w-8 h-8 text-white mt-2 animate-bounce" />
          <FaAngleDoubleDown className="w-8 h-8 text-white mt-2 animate-bounce" />
          <FaAngleDoubleDown className="w-8 h-8 text-white mt-2 animate-bounce" />
        </div>
      </div>
      {/*  */}
      <div className=" flex flex-wrap justify-center gap-6 p-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:scale-105 hover:shadow-2xl transition duration-500 w-100"
            data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
            data-aos-delay={index * 150} // يخليهم ييجوا ورا بعض
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-2xl font-bold text-one mt-2">{item.price}</p>
          </div>
        ))}
      </div>
      {/*  */}
      <section className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
              Browse Our
              <strong className="text-one"> Top </strong>
Category            </h1>
            <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
              Discover expertly crafted courses to elevate your skills
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 ">
            {courses.map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/category/${cat.id}`, { state: cat })}
                className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden flex flex-col"
              >
                {/* الصورة */}
                <img
                  src={cat.category_image}
                  alt={cat.category_name}
                  className="w-full h-48 sm:h-56 object-cover"
                />

                {/* النصوص */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <FaFolderOpen className="text-one text-2xl flex-shrink-0" />
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
                      {cat.category_name}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-3 flex-1">
                    {cat.category_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/*  */}
   <div className="w-full max-w-5xl mx-auto px-4 p-5">
  <span className="text-one text-2xl md:text-3xl font-bold flex justify-center mb-6 text-center">
    Trusted by Thousands of Happy Customers
  </span>

  <div className="relative w-full" data-aos="fade-left">
    <div className="flex gap-2 w-full  justify-center flex-wrap  overflow-hidden transition-all duration-300">
      {data.slice(startIndex, startIndex + visibleCards).map((item) => (
        <div
          key={item.id}
          className="flex flex-row-reverse items-stretch gap-4 border rounded-lg p-4 shadow 
          w-full sm:w-1/2 lg:w-1/3 bg-white"
        >
          <img
            alt={item.title}
            src={item.img}
            className="w-20 h-20 rounded object-cover"
          />
          <div>
            <h3 className="font-medium text-one text-base sm:text-lg">{item.title}</h3>
            <p className="mt-0.5 text-gray-700 text-sm sm:text-base">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* أزرار التنقل */}
    <button
      onClick={prevSlide}
      disabled={startIndex === 0}
      className="absolute -left-4 sm:-left-10 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow disabled:opacity-50"
    >
      <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>

    <button
      onClick={nextSlide}
      disabled={startIndex + visibleCards >= data.length}
      className="absolute -right-4 sm:-right-10 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow disabled:opacity-50"
    >
      <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  </div>
</div>

    </div>
  );
};

export default Home;
