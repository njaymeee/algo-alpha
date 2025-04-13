import Modals from "../components/quizmodal.jsx";
import Button from "../components/button.jsx";
import Header from '../components/Header.jsx';
import Nav from '../components/nav.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';



function Flowchart() {
    const Context = {
        Title: "Flowchart",
        SubTitle1: "What is Flowchart?",
        Article1: "A flowchart is a diagram that represents a process, system or computer algorithm. Flowcharts show the steps as boxes of various kinds, and their order by connecting them with arrows. Flowcharts are used in analyzing, designing, documenting or managing a process or program in various fields.",
        SubTitle2: "Types of Flowchart",
        Article2: "These are the types of Flwochart. Process Flowchart\n2, Swimlane Flowchart\n3, Workflow Diagram\n4, Data Flow Diagram\n5, Business Process Model and Notation (BPMN)\n6. Influence Diagram\n7, System Flowchart\n8, SDL Diagram\n9, Cross-Functional Flowchart\n10, and IDEF Flowchart",
        SubTitle3: "Uses of Flowchart",
        Article3: "We use flowchart to understand a process\n2, to improve a process\n3. To communicate a process\n4, To document a process\n5, To analyze a process\n6, To model a process\n7, To manage a process\n8. To document a process\n9, To improve a process\n10, To document a process",

        Images1: "",
    }

    const QA = {
        Question1: "What is the key definition of a flowchart?",
        Answer1: "A",
        MultipleAnswer1: ["A. A diagram that represents a process, system or computer algorithm", "B. A diagram that represents a process, system or computer algorithm", "C. A diagram that represents a process, system or computer algorithm", "D. A diagram that represents a process, system or computer algorithm"],
        
        Questions2: "What are the types of flowchart?",
        Answer2: "C",
        MultipleAnswer2: ["A. Process Flowchart", "B. Swimlane Flowchart", "C. Workflow Diagram", "D. Data Flow Diagram"],

        Questions3: "What are the uses of flowchart?",
        Answer3: "B",
        MultipleAnswer3: ["A. To understand a process", "B. To improve a process", "C. To communicate a process", "D. To document a process"],
    };

    const handleClick = () => {
        <Modals getQuestion={QA}/>
    }

    return (
        <>
            <Header />
            <Nav />
            <h1 className="text-center font-sans font-bold text-5xl">{Context.Title}</h1>
            <hr className="my-4"/>
            <section className="text-center font-sans">
                <div className="border p-4 m-4">
                    <h2 className="text-2xl font-bold">{Context.SubTitle1}</h2>
                    <p className="text-left">{Context.Article1}</p>
                </div>
            </section>
            <section className="text-center font-sans">
                <div className="border p-4 m-4">
                    <h2 className="text-2xl font-bold">{Context.SubTitle2}</h2>
                    <p className="text-left">{Context.Article2}</p>
                </div>
            </section>
            <section className="text-center font-sans">
                <div className="border p-4 m-4">
                    <h2 className="text-2xl font-bold">{Context.SubTitle3}</h2>
                    <p className="text-left">{Context.Article3}</p>
                </div>
            </section>
            <section>

            </section>
            <div className="flex justify-center my-4 space-x-4">
                <Button text={"Start Quiz"} callback={handleClick()} />
                <Link to={"/programming"}>
                    <Button text={"Return"} />
                </Link>
            </div>
            <Footer/>
        </>
    );
}

export default Flowchart;