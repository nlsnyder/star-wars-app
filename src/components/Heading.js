import React from "react";

const mainButtonClasses =
  "transition duration-150 text-sky-50 bg-sky-700 hover:bg-sky-800 p-3 font-bold rounded-lg shadow-md opacity-90 shadow-sky-700 active:ring-2 active:ring-sky-900 active:ring-offset-2";

const secondaryButtonClasses =
  "transition duration-150 text-sky-700 bg-white hover:text-sky-50 hover:bg-sky-700 p-3 font-bold rounded-lg border-2 border-sky-700 shadow shadow-sky-700 active:ring-2 active:ring-sky-900 active:ring-offset-2";

  const swapi = "https://swapi.dev/";

const Heading = (props) => {
  return (
    <div className="text-xl flex flex-col w-3/5 justify-center items-center mx-auto my-10 gap-12">
      <h1 className="text-4xl capitalize text-sky-700 font-bold">
        {props.title}
      </h1>
      <p className="text-slate-500 w-4/5 mx-auto">{props.description}</p>
      <div className="flex gap-6">
        <a href="#apiSearch" className={mainButtonClasses}>
          Try it now
        </a>
        <a href={swapi} title="Go to Star Wars Api" target="_blank" className={secondaryButtonClasses} rel="noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Heading;
