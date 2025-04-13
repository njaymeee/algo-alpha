import Footer from '../components/Footer.jsx';
import Nav from '../components/nav.jsx';

import React from 'react';
import Card from '../components/card.jsx';

const ProgLes = () => {
    const ProgItems = [
        {lesson: 1, title: "Introduction to Flowchart",description: "Flowchart along with Lesson 2: Symbols",  img: "../assets/Flowchart.png", Link:"/programming/flowchart"},
        {lesson: 2, title: "Symbols",description: "Basic Symbols to discuss and learn.",  img: "../assets/Symbols.png",},
        {lesson: 3, title: "Variables",description: "Basic use of Variables",  img: "../assets/Variables.png",},
        {lesson: 4, title: "Operators",description: "Basic use of Operators",  img: "../assets/Operators.png",},
    ]

    return (
        <>
            <Nav/>
            <section className="flex flex-col items-center h-100vh">
                <div className="w-3/4">
                    <h2 className="text-3xl mb-4 font-sans font-bold">Programming</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {ProgItems.map((item) => (
                            <div key={item.lesson} className="p-4 border rounded-lg ">
                                <Card img={item.img} header={item.title} paragraph={item.description} Link={item.Link}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default ProgLes;