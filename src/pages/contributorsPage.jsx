import {Nav} from '../components/Nav2.jsx'
import { Button } from '../components/button.jsx';

function ContributePage() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Nav/>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Project Contributors</h1>
                <p className="mb-4">This project is made possible by the contributions of many talented individuals. Below are some of the key contributors:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Neiljohn Oliver A. Verdejo - Technical Director</li>
                    <li>Harvey Anthony Ongog - Frontend & Backend Developer</li>
                    <li>Princess Cervantes - Designer & Lesson Editorial</li>
                    <li>Yurien Yulie, Peanut Butter - Designer</li>
                </ul>
                <p>If you would like to contribute to this project, please check out our GitHub repository and follow the contribution guidelines.</p>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Contribute Your Lessons</h2>
                    <p className="mb-4">We welcome contributions from the community! If you have lessons or resources you'd like to share, please click the button below to get started.</p>
                    <Button onClick={() => window.location.href = '/contribute'}>Contribute Now</Button>
                </div>
            </div>
        </div>
    );
}