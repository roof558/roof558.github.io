import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="w-full will-change-contents h-5/6 min-h-566 absolute">
                <h1 className="m-3 text-3xl mt-3">
                    Hi, 
                    <br /> This is Justin Lee's Project Portfolio Page
                    <br /> Software Engineer
                </h1>
                <Link to={'/'}>
                    <p className="text-decoration-line: underline text-blue-700 m-3 text-xl">
                        Home Page
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Home;