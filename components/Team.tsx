import React from "react";
import Image from "next/image";
import Ale_Alfaro from "../public/team/Ale_Alfaro.png";
import Ed_Herrera from "../public/team/Ed_Herrera.png";
import Kush from "../public/team/Kush.png";
import Pablo_Segali from "../public/team/Pablo_Segali.png";

export default function Team() {
  const team = [
    { nick: "Ed_Herrera", image: Ed_Herrera },
    { nick: "Ale_Alfaro", image: Ale_Alfaro },
    { nick: "Pablo_Segali", image: Pablo_Segali },
    { nick: "Kush", image: Kush },
  ];
  return (
    <>
      {/*<img
        className="w-full -my-px"
        src="/sections/mission-bg.svg"
        alt="Planet"
      />*/}
      <h2 id="team">Team</h2>
      <section className="team-body flex justify-center gap-2 pt-10 flex-wrap xl:gap-10">
        {team.map((member) => (
          <div
            key={member.nick}
            className="grid place-items-center text-indigo-700"
          >
            <p className="font-bangers text-4xl my-2">{member.nick}</p>
            <Image
              alt="team member"
              width={288}
              height={288}
              src={member.image}
              className="rounded-3xl"
              placeholder="blur"
            />
            {/*<p className="team-role my-2 ml-4">{member.role}</p>*/}
          </div>
        ))}
      </section>
      <img
        className="w-full -mt-px"
        src="/sections/team-bottom.svg"
        alt="Planet"
      />
    </>
  );
}
