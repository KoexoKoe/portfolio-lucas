import React from "react";

export function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FFDE59]">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Lucas, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              My journey started at year 2023. Learning everything about Web
              Development on my own. It is my passion to create websites for
              clients and companies with possitive review! I am always looking
              for solution to finish my work, so it can run properly without any
              problems!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
