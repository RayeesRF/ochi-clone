import React from "react";

function About() {
  return (
    <div className=" w-full py-16 rounded-tl-3xl rounded-tr-3xl bg-[#cdea68]">
      <h1 className="text-black font-['Neue_Montreal'] tracking-tight text-[3.5vw] py-5 leading-[4vw] pl-20 pr-24">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to{" "}
        <span className="underline">raise funds</span>,{" "}
        <span className="underline">sell produtcs</span>,{" "}
        <span className="underline">explain complex ideas</span>, and{" "}
        <span className="underline">hire great people</span>.
      </h1>
      <div className="w-full border-t-[1.5px] px-20 font-['Neue_Montreal'] flex flex-wrap sm:flex-nowrap gap-5 pt-10 mt-16 border-[#3d422a]">
        <div className="w-full sm:w-1/2">
          <h1 className="text-[3vw] text-zinc-900">Our approach:</h1>
          <button className="px-6 mt-1 py-2 bg-zinc-900 rounded-full flex items-center gap-6">
            Read More <div className="w-[9px] h-[9px] bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-full sm:w-1/2 bg-[#ceea6871]">
          <img
            className="w-full rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
