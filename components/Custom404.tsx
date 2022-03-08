import React from "react";

const Custom404 = () => {
  return (
    <div className="font-bangers top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute grid place-items-center gap-5 bg-indigo-700 bg-opacity-70 p-4 rounded-3xl">
      <h1 className="text-3xl text-white text-center">
        You are rolling the wrong way.
      </h1>
      <button className="yellow-button whitespace-nowrap">
        <a href="/">Go back home</a>
      </button>
    </div>
  );
};

export default Custom404;
