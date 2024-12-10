import React, {useState} from 'react';
import errorImg1 from '../assets/error2.png';
import errorImg2 from '../assets/404.png';
import { FaInstagram, FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter, FaGithub} from "react-icons/fa6";
const ErrorPage = () => {
    const [click, setclick] = useState(false);
    const errorImage = click ? errorImg2 : errorImg1;
    const handleImageToggle = () => {
        setclick(!click);
    }

    return (
        <div onClick={handleImageToggle} className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 text-center lg:text-left px-6">
            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center">
                <img
                    src={errorImage} // Replace with the actual image URL
                    alt="Crying Character"
                    className="w-72 md:w-96 lg:h-[80vh] max-w-md md:max-w-lg"
                />
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-12">
                <h1 className="text-5xl xl:text-6xl font-bold text-gray-800 mb-4">AWWW...DON'T CRY.</h1>
                <p className="text-lg xl:text-xl text-gray-600 mb-6">
                    It's just a 404 Error! <br />
                    What you're looking for may have been misplaced in Long Term Memory.
                </p>
                <div className="flex justify-center lg:justify-start space-x-4">
                    <a
                        href="https://www.github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-4xl"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-4xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-4xl"
                    >
                        <FaSquareXTwitter/>
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-600 text-4xl"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
