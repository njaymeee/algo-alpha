import React from 'react';
import './App.css';
import Nav2 from './components/Nav2.jsx';
import Button from './components/button.jsx';
import Footer from './components/Footer.jsx';

import { Link } from "react-router-dom";

function App() {
  return (
    <>

      <div className="min-h-screen bg-gray-100">
        <Nav2/>
        <main className="flex flex-col items-center justify-center py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-bold text-[#00ACAC] mb-4">Gain knowledge from learning things</h1>
              <p className="text-xl text-gray-700 mb-8">A free education tailored for Programmers and Journalist.</p>

              <Link to="/dashboard">
              <Button text={"START LEARNING"} />
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
              <img src={import.meta.env.BASE_URL + "../src/assets/mindexpansion1.png"} alt="Algowords" className="w-100 h-auto object-cover" />
            </div>
          </div>
        </main>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#00ACAC]">Our Features</h2>
            <p className="text-xl text-gray-700 mt-4">Explore the amazing features we offer</p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 border-b-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:border-4 hover:border-blue-500">
                <img src={import.meta.env.BASE_URL + "../src/assets/stackedbook1.png"} alt="Feature One" className="w-full h-fit object-cover mb-4" />
                <h3 className="text-2xl font-bold text-[#00ACAC] mb-4">Comprehension</h3>
                <p className="text-gray-700 mb-4">Our library for Programming and English are full stacked, it accessible via separated ages.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 border-b-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:border-4 hover:border-blue-500">
                <img src={import.meta.env.BASE_URL + "../src/assets/interconnectedbrain1.png"} alt="Feature Two" className="w-full h-fit object-cover mb-4" />
                <h3 className="text-2xl font-bold text-[#00ACAC] mb-4">Knowledge</h3>
                <p className="text-gray-700 mb-4">Earn knowledge from learning new things.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 border-b-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:border-4 hover:border-blue-500">
                <img src={import.meta.env.BASE_URL + "../src/assets/idealistic1.png"} alt="Feature Three" className="w-full h-fit object-cover mb-4" />
                <h3 className="text-2xl font-bold text-[#00ACAC] mb-4">Quizzes</h3>
                <p className="text-gray-700 mb-4">Try challenging yourself by trying our quizzes in each lessons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#00ACAC]">Courses</h2>
      <p className="text-xl text-gray-700 mt-4">Courses are open for all ages. Grade Levels are seperated</p>
        </div>
        <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 px-4 mb-8">
        <div className="bg-white border-b-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:border-4 hover:border-blue-500">
          <img src={import.meta.env.BASE_URL + "./src/assets/computerlogo 1.svg"} alt="Feature Four" className="w-full h-32 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-[#00ACAC] mb-4">Programming (for Grade 8)</h3>
          <p className="text-gray-700 mb-4">Programming is another level, but we will not tacle the coding instead, we are going to tought you "how to use a Flowchart".</p>

          <Link to="/programming">
          <Button text={"Start Here"} />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 mb-8">
        <div className="bg-white border-b-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:border-4 hover:border-blue-500">
          <img src={import.meta.env.BASE_URL + "./src/assets/literaturelogo 1.svg"} alt="Feature Five" className="w-full h-32 object-fit mb-4" />
          <h3 className="text-2xl font-bold text-[#00ACAC] mb-4">English (for Grade 9)</h3>
          <p className="text-gray-700 mb-4"> Want to be a writer or a journalist?, you can start your journey here.</p>
          <Link to="/english"><Button text={"Start Here"} /></Link>
        </div>
      </div>
        </div>
      </div>
    </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#00ACAC]">Start Learning to earn knowledge.</h2>
          </div>
          <div className="text-center">
            <Link to="/dashboard"><Button text={"START LEARNING"} />
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;