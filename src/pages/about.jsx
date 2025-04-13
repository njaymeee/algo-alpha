import React from 'react';
import {Nav2} from '../components/Nav2.jsx'

const AboutUs = () => {
    return (
        <>
            <Nav2></Nav2>
          <div className="p-5 font-helvetica text-center">
            <h1 className="text-2xl font-bold">About Us</h1>
            <p className="mt-4 ">
                Welcome to Algowords! We are dedicated to providing quality educational content to help you learn and grow.
            </p>
            <p className="mt-4">
                Our mission is to make learning accessible and enjoyable for everyone. Whether you are a beginner or an advanced learner, we have something for you.
            </p>
            <p className="mt-4">
                Thank you for choosing Algowords. We hope you enjoy your learning journey with us!
            </p>
        </div>
        </>
    );
};

export default AboutUs;