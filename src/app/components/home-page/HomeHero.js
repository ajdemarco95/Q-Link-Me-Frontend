import React from "react";

function HomeHero() {
  return (
    <div className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
      <div className="md:flex-1 md:mr-10">
        <h1 className="font-pt-serif text-5xl font-bold mb-7">
          This is Q-Link.me
        </h1>
        <p className="font-normal mb-7">
          Unleash Your Online Presence, One Link at a Time
        </p>
        <div>
          <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
            Claim your link
          </button>
          <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
        <img src="/iphone.jpeg" alt="" />
      </div>
    </div>
  );
}

export default HomeHero;
