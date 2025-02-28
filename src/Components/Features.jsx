import { motion, useAnimation } from "framer-motion";
import React from "react";

function Features() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-16">
      <div className="w-full px-10 sm:px-20 border-b-[1px] pb-10 border-zinc-500">
        <h1 className="text-[4vw] font-['Neue_Montreal'] tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20 py-4 mt-10">
        <div className="cards flex sm:flex-nowrap flex-wrap items-center gap-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="relative h-fit sm:h-[70vh] card-container w-full sm:w-1/2 "
          >
            <h1 className="absolute flex overflow-hidden text-[6vw] z-10 text-[#cdea68] leading-none tracking-tight left-full top-1/2 -translate-x-[50%] -translate-y-[50%] ">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: "linear", delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card-inner w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="./card1.jpg" alt="" />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className=" relative card-container w-full sm:w-1/2 h-fit sm:h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[6vw] text-[#cdea68] leading-none tracking-tight right-full top-1/2 translate-x-[50%] -translate-y-[50%] ">
              {"BLACKBOOK".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: "linear", delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card-inner w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="./card2.jpg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
