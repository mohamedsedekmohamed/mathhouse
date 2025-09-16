import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaFolderOpen, FaBookOpen, FaListUl, FaRegFileAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    axios
      .get("https://login.mathshouse.net/api/courses_lists")
      .then((response) => {
        setCourses(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="bg-white py-12 lg:py-20">
    <section className="overflow-hidden pb-6 sm:grid sm:grid-cols-2">
  <div
    className="p-8 md:p-12 lg:px-16 lg:py-24"
    data-aos="fade-right"
    data-aos-duration="1000"
  >
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2
        className="text-2xl font-bold text-one   md:text-3xl"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Expand Your Knowledge
      </h2>

      <p
        className=" text-gray-500 md:mt-4 md:block"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Our courses are meticulously categorized within the educational system
        framework, allowing you to efficiently select the program that aligns
        with your specific learning objectives
      </p>

      <div
        className="mt-4 md:mt-8"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <button
  onClick={() =>
    document.getElementById("Cour").scrollIntoView({ behavior: "smooth" })
  }
  className="inline-block rounded-sm bg-one px-12 py-3 text-sm font-medium text-white transition hover:bg-one/75 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
>
category
</button>
      </div>
    </div>
  </div>

  <img
    alt="expand knowledge"
    src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full object-cover sm:h-full"
    data-aos="fade-left"
    data-aos-duration="1000"
  />
</section>

      <section id="Cour" className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mx-auto max-w-prose text-center mb-10" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            <strong className="text-one"> category
 </strong>
          </h1>
          <p className="mt-3 text-gray-600 text-sm sm:text-base lg:text-lg">
            Discover our top categories and explore detailed courses tailored for you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 ">
          {courses.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/category/${cat.id}`, { state: cat })}
              data-aos="zoom-in"
              data-aos-delay={index * 100} 
              className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden flex flex-col"
            >
              <img
                src={cat.category_image}
                alt={cat.category_name}
                className="w-full h-48 sm:h-56 object-cover"
              />

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

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaBookOpen className="text-one" /> {cat.course?.length || 0} Courses
                  </span>
                  <span className="flex items-center gap-1">
                    <FaListUl className="text-one" /> {cat.course?.reduce((acc, c) => acc + (c.chapters_count || 0), 0)} Chapters
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Courses;
