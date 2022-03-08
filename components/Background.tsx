import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

export default function Background() {
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 background" />
      <div
        className="absolute top-0 left-0 w-screen h-auto"
        style={{ zIndex: "-1" }}
      >
        <RellaxWrapper xs={0} tablet={4} desktop={4}>
          <div className="relative h-screen w-screen">
            <img 
              src="sections/slogan.svg"
              alt="They are rolling your way"
              className="hidden opacity-80 px-5 absolute bottom-12 right-1/2 translate-x-1/2 lg:max-w-3xl lg:opacity-50"
            />
            <img
              src="planets/planet1.svg"
              alt="Planet"
              className="hidden md:block absolute w-20 -bottom-10 right-1/4 md:right-20"
            />
            <img
              src="planets/planet2.svg"
              alt="Planet"
              className="hidden absolute w-24 top-1/4 left-1/2 opacity-50 md:block -rotate-90"
              style={{ zIndex: "10" }}
            />
            <img
              src="planets/planet3.svg"
              alt="Planet"
              className="absolute w-14 top-20 right-4 md:right-20"
            />
          </div>
        </RellaxWrapper>
      </div>
    </>
  );
}
