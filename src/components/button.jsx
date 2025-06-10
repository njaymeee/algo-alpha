import React, { useState } from 'react';

function Button(props, onClick) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200); // Reset the animation after 200ms
        if (onClick) {
            onClick();
        }
    };

    return (
        <button 
            className={`bg-[#5672FF] cursor-pointer text-white font-bold py-2 px-4 rounded-[45px] shadow-md transform transition-transform duration-200 ${isClicked ? 'scale-95' : 'hover:scale-105'}`}
            onClick={handleClick}
        >
            {props.text}
        </button>
    );
};


export default Button;