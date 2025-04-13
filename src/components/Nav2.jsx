import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Nav2 = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-blue-500 p-4 font-[helvetica] flex justify-between items-center sticky">
            <div className="mr-auto flex items-center">
                <h1 className="text-white text-center font-bold font-sans text-3xl">ALGOWORDS</h1>
            </div>
            <ul className="flex space-x-4">
                <li className="cursor-pointer text-white hover:bg-blue-500 transition duration-300 ease-in-out p-2 rounded ml-5">
                    <Link to={"/about"}>About Us</Link>
                </li>
                <li className="relative text-white hover:bg-blue-500 transition duration-300 ease-in-out p-2 rounded">
                    <button onClick={toggleDropdown} className="focus:outline-none cursor-pointer">
                        Courses
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute bg-[#50a5a5] mt-2 rounded shadow-lg">
                            <li className="cursor-pointer text-white hover:bg-blue-500 transition duration-300 ease-in-out p-2 rounded">
                                <Link to={"/english"}>English</Link>
                            </li>
                            <li className="cursor-pointer text-white hover:bg-blue-500 transition duration-300 ease-in-out p-2 rounded">
                                <Link to={"/programming"}>Programming</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="cursor-pointer text-white hover:bg-blue-500 transition duration-300 ease-in-out p-2 rounded">
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li className="cursor-pointer text-white hover:bg-blue-500 transition duration-300 ease-in-out p-2 rounded">
                    <Link to={"/login"}>Login</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Nav2;