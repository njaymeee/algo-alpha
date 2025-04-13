import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button.jsx';

function Card(props) {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white border border-gray-200">
            <div className="px-6 py-4">
                <article className="mb-4">
                    <h2 className="font-bold text-2xl mb-2 text-gray-800">{props.header}</h2>
                    <p className="text-gray-600 text-base leading-relaxed">{props.paragraph}</p>
                </article>
                <Link to={props.Link}>
                    <Button text={"Start Learning"} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg" />
                </Link>
            </div>
        </div>
    );
}

export default Card;