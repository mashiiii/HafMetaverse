import React from "react";
import toast from "react-hot-toast";

export default function Hero() {
  const handleMint = () => {
    toast.error("Minting is not available yet.", {
      style: {
        backgroundColor: "#4338CA",
        borderRadius: "25px",
        color: "#FBBF24",
      },
      iconTheme: {
        secondary: "#4338CA",
        primary: "#FBBF24",
      },
    });
  };
  return (
    <>
      <p className="font-bangers text-xl font-bold absolute top-28 left-8 text-white">
        HURRY UP
      </p>
      <section className="text-white w-screen h-screen flex flex-col justify-center z-1">
      <h1 className="font-bangers text-7xl text-center md:text-left md:ml-20 lg:text-8xl">
      HAF <span className="text-yellow-400">Metaverse</span>
            </h1>

        <div className="grid place-items-center mt-10 lg:mr-auto lg:ml-64">
          <button className="yellow-button" onClick={handleMint}>
            MINT SOON
          </button>
        </div>
      </section>
      <video controls
        className="xl:block w-96 h-96 absolute top-1/2 -translate-y-1/2 right-56 rounded-3xl"
		src={"/dinos/dino.mp4"}
      />
    </>
  );
}
