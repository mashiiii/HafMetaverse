import React from "react";

const Footer = () => {
  return (
    <footer className="relative">
      <button className="yellow-button absolute top-1/3 right-1/2 translate-x-1/2 whitespace-nowrap">
        <a
          href="https://discord.gg/nupgeU695Q"
          rel="noreferrer"
          target="_blank"
        >
          Join now
        </a>
      </button>
      <img className="w-full" src="sections/footer.svg" alt="Planet" />
    </footer>
  );
};

export default Footer;
