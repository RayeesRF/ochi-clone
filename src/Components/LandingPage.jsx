import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full h-screen bg-zinc-900 pt-2 "
    >
      <div className="textStructure px-16 mt-44">
        {["We Create", " Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" relative mr-[1.1vw] -top-[1.3vw]"
                  >
                    <img
                      className="w-[10vw] h-[6vw] rounded-md"
                      src="./src/Heading-image.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="text-[9.5vw] font-['Founders_Grotesk_X_Condensed'] uppercase leading-[7vw] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] mt-16 py-4 px-16 border-zinc-400 flex items-center justify-between">
        {["For Public & Private Companies", "From the First Pitch to IPO"].map((item, index) => (
          <p className="text-[1.2vw] tracking-tight">{item}</p>
        ))}
        <div className="start flex justify-center gap-2 items-center">
          <div className="px-5 py-2 text-[1vw] uppercase font-light rounded-full border  border-zinc-300 bg-slate-800">
            Start the Project
          </div>
          <div className="hidden p-[0.8vw] bg-slate-800 border border-zinc-300 sm:flex justify-center items-center rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
