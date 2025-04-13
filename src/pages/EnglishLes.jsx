import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import Nav from '../components/nav.jsx';

import React from 'react';
import Card from '../components/card.jsx';

const EnglishLes = () => {
    const EnglishItems = [
        {lesson: 1, title: "Sound Devices", description: "Rhyme, Rythmn, and more.",  img: "./assets/EnglishLessonCard.gif", Link:"/sounddevices"},
        {lesson: 2, title: "Figures of Speech",description: "An phrase or word that has different meaning from its literal definition",  img: "./assets/EnglishLessonCard.gif", Link:"/figurespeech"},
        {lesson: 3, title: "Literature",description: "More on stories and Poetry",  img: "./assets/EnglishLessonCard.gif", Link:"/literacy", Link:"/figurespeech"},
        {lesson: 4, title: "Facts vs. Opinions",description: "Defining the facts and Opinions",  img: "", Link:"/figurespeech"},
        {lesson: 5, title: "Modals",description: "Verbs that help indicate possibility ability, obligation, and more.",  img: "./assets/EnglishLessonCard.gif", Link:"/figurespeech"},
        {lesson: 6, title: "Zero to Second Conditionals",description: "The conditionals: Real, Unreal, Hypotheticals.",  img: "./assets/EnglishLessonCard.gif", Link:"/figurespeech"},
    ]

    return (
        <>
            <Header/>
            <Nav/>
            <section className="flex flex-col items-center">
                <div className="w-3/4">
                    <h2 className="text-2xl">English</h2>
                    <div className="flex flex-wrap">
                        {EnglishItems.map((item) => (
                            <div key={item.lesson} className="w-1/2 p-2">
                                <Card Image={item.img} header={item.title} paragraph={item.description} Link={item.Link} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default EnglishLes;