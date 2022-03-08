import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function Social() {
  return (
    <aside className="fixed bottom-3 md:top-1/2 md:-translate-y-1/2 md:bottom-auto right-3 z-10 text-white">
      <ul className="flex flex-col gap-4">
        <li className="rounded-full p-3 grid place-items-center bg-indigo-700 cursor-pointer hover:bg-opacity-60 focus-visible:bg-opacity-60 transition-all duration-150">
          <a
            href="https://discord.gg/DhRAHrm6Tu"
            rel="noreferrer"
            target="_blank"
          >
            <FaDiscord className="w-7 h-7" />
          </a>
        </li>
        <li className="rounded-full p-3 grid place-items-center bg-indigo-700 cursor-pointer hover:bg-opacity-60 focus-visible:bg-opacity-60 transition-all duration-150">
          <a
            href="https://twitter.com/haf_metaverse"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter className="w-7 h-7" />
          </a>
        </li>
        {/* <li className="rounded-full p-3 grid place-items-center bg-indigo-700 cursor-pointer hover:bg-opacity-60 focus-visible:bg-opacity-60 transition-all duration-150">
          <a
            href="https://twitter.com/RollingDinos"
            rel="noreferrer"
            target="_blank"
	  ><img src="opensea.svg" alt="Opensea" className="w-7 h-7" /></a>
	  </li> */}
      </ul>
    </aside>
  );
}
