import React from 'react';
import './App.css';
import Nav2 from './components/Nav2.jsx';
import Button from './components/button.jsx';
import Footer from './components/Footer.jsx';

import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Nav2 />
        <main className="flex flex-col items-center justify-center py-20 animate-fadeIn">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-[#00ACAC] mb-4 animate-slideInLeft">
                Gain knowledge from learning things
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fadeIn delay-200">
                A free education tailored for Programmers and Journalists.
              </p>
              <Link to="/dashboard">
                <Button text={"START LEARNING"} />
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 animate-slideInRight">
              <img
                src={import.meta.env.BASE_URL + "./src/assets/mindexpansion1.png"}
                alt="Algowords"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </main>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#00ACAC] animate-fadeIn">
              Our Features
            </h2>
            <p className="text-xl text-gray-600 mt-4 animate-fadeIn delay-200">
              Explore the amazing features we offer
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            {[
              {
                img: "./src/assets/stackedbook1.png",
                title: "Comprehension",
                description:
                  "Our library for Programming and English is fully stacked and accessible for all ages.",
              },
              {
                img: "./src/assets/interconnectedbrain1.png",
                title: "Knowledge",
                description: "Earn knowledge from learning new things.",
              },
              {
                img: "./src/assets/idealistic1.png",
                title: "Quizzes",
                description:
                  "Challenge yourself with quizzes in each lesson.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 px-4 mb-8 animate-fadeIn delay-300"
              >
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
                  <img
                    src={import.meta.env.BASE_URL + feature.img}
                    alt={feature.title}
                    className="w-full h-32 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-2xl font-bold text-[#00ACAC] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#00ACAC] animate-fadeIn">
              Courses
            </h2>
            <p className="text-xl text-gray-600 mt-4 animate-fadeIn delay-200">
              Courses are open for all ages. Grade levels are separated.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            {[
              {
                img: "./src/assets/computerlogo 1.svg",
                title: "Programming (for Grade 8)",
                description:
                  "Learn how to use a Flowchart instead of coding.",
                link: "/programming",
              },
              {
                img: "./src/assets/literaturelogo 1.svg",
                title: "English (for Grade 9)",
                description:
                  "Start your journey to becoming a writer or journalist.",
                link: "/english",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 px-4 mb-8 animate-fadeIn delay-300"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
                  <img
                    src={import.meta.env.BASE_URL + course.img}
                    alt={course.title}
                    className="w-full h-32 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-2xl font-bold text-[#00ACAC] mb-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link to={course.link}>
                    <Button text={"Start Here"} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#00ACAC] animate-fadeIn">
              Start Learning to Earn Knowledge
            </h2>
          </div>
          <div className="text-center animate-fadeIn delay-200">
            <Link to="/dashboard">
              <Button text={"START LEARNING"} />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;