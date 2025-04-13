import Header from '../components/Header';
import Nav from '../components/nav.jsx';
import Modals from "../components/quizmodal.jsx";
import Footer from '../components/Footer';

function soundDevices() {

    const context = {
        Title: "Sound Devices",
        IntroParagraph: "Sound devices are resources used by poets to convey and reinforce the meaning or experience of poetry through the skillful use of sound.",
        Article1: "Alliteration is the repetition of the same consonant sounds at the beginning of words that are in close proximity to each other. For example, 'She sells sea shells by the sea shore.'",
        Article2: "Assonance is the repetition of vowel sounds in nearby words. It is used to reinforce the meanings of words or to set the mood. For example, 'The rain in Spain stays mainly in the plain.'",
        Article3: "Consonance is the repetition of consonant sounds within or at the end of words in a phrase or sentence. For example, 'The lumpy, bumpy road.'",
        Article4: "Onomatopoeia is the use of words that imitate the sounds associated with the objects or actions they refer to. For example, 'The bees buzzed, and the brook gurgled.'",
    };

    const QA = {
        Question1: "Definition of Sound Devices",
        Answer1: "C",
        Option: ["A. A device that produces sound", "B. A device that records sound", "C. Resources used by poets to convey and reinforce the meaning or experience of poetry through the skillful use of sound", "D. A device that plays sound"],

        Question2: "What is Alliteration?",
        Answer2: "A",
        Option: ["A. The repetition of the same consonant sounds at the beginning of words that are in close proximity to each other", "B. The repetition of vowel sounds in nearby words", "C. The repetition of consonant sounds within or at the end of words in a phrase or sentence", "D. The use of words that imitate the sounds associated with the objects or actions they refer to"],

        Question3: "What is Assonance?",
        Answer3: "B",
        Option: ["A. The repetition of the same consonant sounds at the beginning of words that are in close proximity to each other", "B. The repetition of vowel sounds in nearby words", "C. The repetition of consonant sounds within or at the end of words in a phrase or sentence", "D. The use of words that imitate the sounds associated with the objects or actions they refer to"],

        Question4: "What is the best examples of Consonance?",
        Answer4: "D",
        Option: ["A. The repetition of the same consonant sounds at the beginning of words that are in close proximity to each other", "B. The repetition of vowel sounds in nearby words", "C. The repetition of consonant sounds within or at the end of words in a phrase or sentence", "D. The lumpy, bumpy road."],

        Question5: "Best Description of Onomatopoeia?",
        Answer5: "A",
        Option: ["A. The use of words that imitate the sounds associated with the objects or actions they refer to", "B. The repetition of the same consonant sounds at the beginning of words that are in close proximity to each other", "C. The repetition of vowel sounds in nearby words", "D. The repetition of consonant sounds within or at the end of words in a phrase or sentence"],
    }

    const handleClick = () => {
        <Modals getQuestions={QA}/>
    } 

    return (
        <>
            <Header />
            <Nav />
            <h1 className="text-center text-4xl">{context.Title}</h1>
            <hr/>
            <section className="font-sans">
                <div>
                    <h2 className="mb-2">Introduction</h2>
                    <p>{context.IntroParagraph}</p>
                </div>
                <img src="https://example.com/image1.jpg" alt="Sound Devices" />
                <p>Source: Example Source</p>
            </section>
            <section>
                <h2>Types of Figure of Speech</h2>
                <div>
                    <h3>Alliteration</h3>
                    <p>{context.Article1}</p>
                </div>
                <div>
                    <h3>Assonance</h3>
                    <p>{context.Article2}</p>
                </div>
                <div>
                    <h3>Consonance</h3>
                    <p>{context.Article3}</p>
                </div>
                <div>
                    <h3>Onomatopoeia</h3>
                    <p>{context.Article4}</p>
                </div>
                <img src="https://example.com/image2.jpg" alt="Examples of Sound Devices" />
                <p>Source: Example Source</p>
            </section>
            <Footer/>
        </>
    );
}

export default soundDevices;