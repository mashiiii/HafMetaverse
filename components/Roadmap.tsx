import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import Angel from "../public/dinos/Angel.png";

export default function Roadmap() {
  const roadmap = [
    {
      title: "",
      percent: "",
      description: [
        "Phase 1: CryptoPug World &amp; La Puerca&quot; is the first phase of Harmony Ark Metaverse. 50% of the proceeds goes directly to Harmony Ark Foundation’s goals; Animal protection &amp; world advocates. 5% fee on each sale where 2% goes to HAF too.",
      ],
    },
    {
      title: "",
      percent: "",
      description: [
        "Phase 1.2: CryptoPug World; 3 weeks later.",
        "Once La Puerca has successfully raised enough energy &amp; love from her different human friends, she will then go back to her CryptoPug World and spread all the good news throughout her planet. All the pugs will go insane and excited to go visit the place where La Puerca got so much love. Earth will go crazy with the visit of so many pugs licking all over the place! But not so many, only 600 of them will arrive with a lot of craziness and bulging eyes. Be ready!. The minting price will be set by the community on the discord channel.",
      ],
    },
  ];

  const handlePhaseTwo = () => {
    toast.error("Phase 2 comming soon.", {
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
      {/*<img
        className="w-full -mb-px"
        src="/sections/roadmap-top.svg"
        alt="Planet"
      />*/}
      <section className="min-h-screen min-w-full grid place-items-center roadmap font-bangers pb-10 md:pb-12 lg:pb-20 xl:pb-0">
        <h2 className="text-blue-600/100 text-4xl grid place-items-center mb-10 xl:text-6xl">
          <p>KEEP AN EYE OPEN -</p>
          <p>THEY ARE ROLLING YOUR WAY</p>
        </h2>
        <div className="md:flex relative">
          <div className="hidden xl:block absolute translate-y-10 -translate-x-32 z-1">
            <Image
              src={Angel}
              width={300}
              height={300}
              placeholder="blur"
              className="rounded-3xl"
            />
          </div>
          <p className="bg-indigo-700 rounded-3xl bg-opacity-70 max-w-lg p-4 text-white mx-2 text-center lg:m-auto xl:text-2xl xl:max-w-xl xl:translate-x-40">
            Welcome to a collection of 101 pieces for auction - unique
            non-fungible tokens living on the Etherium blockchain. Crypto Pugs are
            very nice, but they keep on rolling. Each rolling dino is
            programmatically generated from over 100 possible traits. Every
            rolling object comes with a unique utility from which every Haf Metavers
            holder can benefit - regardless of the rarity.
          </p>
        </div>
        <h2 id="roadmap" className="text-indigo-700 pt-20 text-6xl text-center my-10">
          ROADMAP
        </h2>
        {roadmap.map((phase, index) => (
          <div
            key={phase.title}
            className="my-20 md:gap-10 flex flex-col md:flex-row md:odd:flex-row-reverse"
          >
            <div className="relative mb-7 md:my-auto">
              <h3 className="relative z-1 text-3xl pl-8 text-indigo-700">
                {phase.title}
              </h3>
              <p className="absolute text-8xl -translate-y-20 text-white opacity-70">
                {phase.percent}
              </p>
            </div>
            <p className="bg-indigo-700 rounded-3xl bg-opacity-70 p-4 text-white mx-2 text-center flex flex-col gap-2 max-w-lg text-lg md:text-2xl md:my-auto">
              {phase.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </p>
          </div>
        ))}
        {/*<button className="purple-button" onClick={handlePhaseTwo}>
          <p>Activation of Crypto Pug Phase 2:</p>
          <p>Long live the </p>
              </button>*/}
      </section>
    </>
  );
}
