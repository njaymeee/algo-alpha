import Modals from "../components/quizmodal.jsx";
import Button from "../components/button.jsx";
import Header from "../components/Header.jsx"

function FigureOfSpeech() {
    const QA = {
        Question1: "",
        MultipleAnswer: "",
        Answer: "",
    };

    const handleClick = () => {
        <Modals getQuestion={QA}/>
    }

    return (
        <>
            <Header />
            <h1 className="text-center">FIGURE OF SPEECH</h1>
            <hr className="my-4"/>
            <section className="text-center">
                <div>
                    <h2 className="text-xl font-bold">Introduction</h2>
                    <p>{context.p1}</p>
                </div>
                <img src="" alt="image" className="mx-auto my-4"/>
                <p>{context.imgsrc1}</p>
            </section>
            <section className="text-center">
                <h2 className="text-xl font-bold">Types of Figure of Speech</h2>
                <p>{context.p2}</p>
            </section>
            <Button text={"Start Quiz"} callback={handleClick()} className="mx-auto my-4"></Button>
            <Footer/>
        </>
    );
}

export default FigureOfSpeech;