import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004d43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
          className="text-[19vw] leading-none font-['Founders_Grotesk_X_Condensed'] pr-10 py-5 font-medium -mb-[6vw]"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
          className="text-[19vw] leading-none font-['Founders_Grotesk_X_Condensed'] pr-10 py-5 font-medium -mb-[6vw]"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
