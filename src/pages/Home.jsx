import React from "react";

const Home = () => {
  return (
    <div className="h-screen bg-purple-200 w-screen flex items-center justify-center text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl" id="home">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
        Hi,
        <br /> This is{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Justin Lee's{" "}
        </span>
        Project Portfolio Page
        <br />
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Software Engineer
        </span>
      </h1>
    </div>
  );
};

export default Home;
