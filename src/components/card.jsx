import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button.jsx';

function Card(props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105">
            <img src={import.meta.env.BASE_URL + props.Image} alt="Card" className="w-full" />
            <div className="px-6 py-4">
                <arcticle className="mb-0.5">
                <h2 className="font-bold text-xl mb-2">{props.header}</h2>
                <p className="text-gray-700 text-base">{props.paragraph}</p>
                </arcticle>

                <Link to={props.Link}>
                    <Button text={"Start Learning"} />
                </Link>
            </div>
        </div>
    );
}

export default Card;