import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import think from "../../assets/think.jpg";
import { FaFileAlt } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Questions = () => {
  const [data, setData] = useState({
    categories: [],
    courses: [],
    exam_codes: [],
  });
  const [loading, setLoading] = useState(false);
  const [dataex, setDataex] = useState([]);
  const sectionRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [targetLink, setTargetLink] = useState("");
  const handleClick = (id) => {
    setTargetLink(`https://login.mathshouse.net/my_login/questions/${id}`);
    setOpenModal(true);
  };
  const confirmGo = () => {
    setOpenModal(false);
    window.location.href = targetLink;
  };
  const [pagenumber, setpagenumber] = useState(1);
  const [totalPages, setTotalPages] = useState(6500);
  useEffect(() => {
    if (!selectedCategory) return; // ما يشتغل إلا لما تختار

    const payload = {
      category_id: selectedCategory,
      course_id: selectedCourse,
      code_id: selectedExam,
      year: selectedYear,
      month: selectedMonth,
      per_page: "9",
      page: pagenumber,
    };

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(
        ([_, value]) => value !== "" && value !== null && value !== undefined
      )
    );

    setLoading(true);
    axios
      .post("https://login.mathshouse.net/api/question/filter", filteredPayload)
      .then((response) => {
        setDataex(response.data.questions);
        setTotalPages(response.data.total_pages);
        if (response.data.questions.length === 0) {
          toast.info("No questions found for the selected criteria.");
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [pagenumber]); // <-- ركز هنا

  useEffect(() => {
    if (dataex && dataex.length > 0 && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [dataex]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedExam, setSelectedExam] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1990 + 1 },
    (_, i) => 1990 + i
  );

  // داخل الـcomponent
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const filteredCourses = data.courses.filter(
    (course) => course.category_id === Number(selectedCategory)
  );
  const months = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    axios
      .get("https://login.mathshouse.net/api/exam_lists")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="flex-1 flex justify-center items-center p-4">
          <div className="space-y-5 w-full max-w-md">
            <h1 className="text-one text-3xl font-extrabold">
              Choose Question
            </h1>
            {/* Category */}
            <div data-aos="fade-up-right">
              <label className="block mb-1 text-gray-600 font-medium">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedCourse("");
                }}
                className="w-full py-3 px-4 text-one bg-white border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-one focus:border-one transition-colors duration-300 custom-select"
              >
                <option className="text-sm" value="">
                  Select Category
                </option>
                {data.categories.map((cat) => (
                  <option className="text-sm" key={cat.id} value={cat.id}>
                    {cat.cate_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Course */}
            <div data-aos="fade-up-right">
              <label className="block mb-1 text-gray-600 font-medium">
                Course
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                disabled={!selectedCategory}
                className={`w-full py-3 px-4 text-one bg-white border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-one focus:border-one transition-colors duration-300 custom-select ${
                  !selectedCategory
                    ? "bg-gray-100 cursor-not-allowed"
                    : "border-gray-300"
                }`}
              >
                <option className="text-sm" value="">
                  Select Course
                </option>
                {filteredCourses.map((course) => (
                  <option className="text-sm" key={course.id} value={course.id}>
                    {course.course_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Exam Code */}
            <div data-aos="fade-up-right">
              <label className="block mb-1 text-gray-600 font-medium">
                Exam Code
              </label>
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full py-3 px-4 text-one bg-white border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-one focus:border-one transition-colors duration-300 custom-select"
              >
                <option className="text-sm" value="">
                  Select Exam Code
                </option>
                {data.exam_codes.map((exam) => (
                  <option className="text-sm" key={exam.id} value={exam.id}>
                    {exam.exam_code}
                  </option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div data-aos="fade-down-right">
              <label className="block mb-1 text-gray-600 font-medium">
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full py-3 px-4 text-one bg-white border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-one focus:border-one transition-colors duration-300 custom-select"
              >
                <option className="text-sm" value="">
                  Select Year
                </option>
                {years.map((year) => (
                  <option className="text-sm" key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Month */}
            <div data-aos="fade-down-right">
              <label className="block mb-1 text-gray-600 font-medium">
                Month
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full py-3 px-4 text-one bg-white border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-one focus:border-one transition-colors duration-300 custom-select"
              >
                <option className="text-sm" value="">
                  Select Month
                </option>
                {months.map((month) => (
                  <option
                    className="text-sm"
                    key={month.value}
                    value={month.value}
                  >
                    {month.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => {
                if (!selectedCategory)
                  return toast.warn("Please select a category");
                const payload = {
                  category_id: selectedCategory,
                  course_id: selectedCourse,
                  code_id: selectedExam,
                  year: selectedYear,
                  month: selectedMonth,
                  per_page: "9",
                  page: pagenumber,
                };

                const filteredPayload = Object.fromEntries(
                  Object.entries(payload).filter(
                    ([key, value]) =>
                      value !== "" && value !== null && value !== undefined
                  )
                );
                setLoading(true);
                axios
                  .post(
                    "https://login.mathshouse.net/api/question/filter",
                    filteredPayload
                  )
                  .then((response) => {
                    setDataex(response.data.questions);
                    setTotalPages(response.data.total_pages);

                    if (response.data.questions.length === 0) {
                      toast.info(
                        "No questions found for the selected criteria."
                      );
                    } else {
                      toast.success("Data sent successfully!");
                    }
                    setLoading(false);
                  })
                  .catch((error) => {
                    setLoading(false);
                    if (
                      error.response &&
                      error.response.data &&
                      error.response.data.errors
                    ) {
                      const errors = error.response.data.errors;
                      for (const key in errors) {
                        errors[key].forEach((msg) => {
                          toast.error(msg);
                        });
                      }
                    } else {
                      toast.error("Error sending data!");
                    }
                  });
              }}
              className="w-full py-3 text-white font-semibold bg-gradient-to-r from-one to-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:from-one hover:to-one active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? "Loading..." : "Confirm Selection"}
            </button>
          </div>
        </div>

        <div
          className="flex-1 flex justify-center items-center p-4 "
          data-aos="flip-up"
        >
          <img
            src={think}
            alt="Illustration"
            className="w-full h-auto max-w-lg"
          />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <TfiReload className="animate-spin text-6xl text-one" />
        </div>
      ) : (
        <>
          <div ref={sectionRef} className="">
        {dataex && dataex.length > 0 && (
          <h2 className="text-center text-one text-2xl py-4 font-medium">
            Questions
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
          {dataex &&
            dataex.length > 0 &&
            dataex.map((exam) => (
              <a
                data-aos="flip-up"
                key={exam.id}
                onClick={() => handleClick(exam.id)}
                className="block cursor-pointer w-60 lg:w-100 border border-gray-200 rounded-2xl p-6 bg-white shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 max-w-sm mx-auto sm:max-w-md"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <FaFileAlt className="text-one text-2xl" />{" "}
                  {/* إضافة الأيقونة */}
                  <h2 className="text-xl font-semibold text-gray-800 truncate">
                    {exam.exam_name}
                  </h2>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="flex justify-between">
                    <span className="font-medium text-gray-700">Year:</span>
                    <span>{exam.year}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium text-gray-700">Month:</span>
                    <span>{exam.month}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium text-gray-700">Code:</span>
                    <span>{exam.code}</span>
                  </p>
                </div>
              </a>
            ))}
        </div>
      </div>
      {dataex && dataex.length > 0 && (
        <div className="flex justify-center flex-wrap items-center mt-6 gap-2">
          {/* Prev Button */}
          <button
            disabled={pagenumber === 1}
            onClick={() => setpagenumber((prev) => prev - 1)}
            className={`px-4 py-2 rounded-lg border ${
              pagenumber === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Prev
          </button>

          {/* Page Info */}
          <span className="px-2 py-2 font-medium text-one">
            Page {pagenumber} of {totalPages}
          </span>

          {/* Input for custom page */}
          <input
            type="number"
            min="1"
            max={totalPages}
            placeholder="Go to..."
            className="w-20 px-2 py-1 border rounded-lg text-center"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const page = Number(e.target.value);
                if (page >= 1 && page <= totalPages) {
                  setpagenumber(page);
                }
              }
            }}
          />

          {/* Next Button */}
          <button
            disabled={pagenumber === totalPages}
            onClick={() => setpagenumber((prev) => prev + 1)}
            className={`px-4 py-2 rounded-lg border ${
              pagenumber === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      )}

        </>
      )}
    
      {openModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Confiem{" "}
            </h2>
            <p className="text-gray-600 mb-6">Start Question ? </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                No
              </button>
              <button
                onClick={confirmGo}
                className="px-4 py-2 rounded-lg bg-one text-white hover:bg-one/80"
              >
                Yes{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
