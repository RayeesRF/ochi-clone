import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-200 sm:flex-nowrap flex flex-wrap items-center gap-5 py-5 sm:py-2 px-10 sm:px-32">
      <div className="cardbox w-full h-[40vh] sm:w-[40vw] sm:h-[55vh]">
        <div className="card1 relative w-full h-full flex items-center justify-center rounded-xl bg-[#004d43]">
          <img
            className="w-[8.5vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute text-[1vw] left-5 text-[#cdea68] bottom-5 px-[1.2vw] py-[0.6vw] border border-[#cdea68] rounded-full">
            &copy; 2019-2022
          </button>
        </div>
      </div>
      <div className="cardbox w-full h-[40vh] sm:w-[40vw] sm:h-[55vh] flex flex-wrap sm:flex-nowrap items-center gap-5">
        <div className="card1 relative w-full sm:w-1/2 sm:h-full h-[20vh] flex items-center justify-center rounded-xl bg-[#212121]">
          <img
            className="w-[10vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute text-[1vw] left-3 sm:left-10 text-zinc-300 bottom-2 sm:bottom-5 px-[1.2vw] py-[0.6vw] border text-center hover:bg-black hover:text-white transition-all rounded-full">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card1 relative w-full sm:w-1/2 sm:h-full h-[20vh] flex items-center justify-center rounded-xl bg-[#212121]">
          <img
            className="w-[9vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute text-[1vw] left-3 sm:left-10 text-zinc-300 bottom-2 sm:bottom-5 px-[1.4vw] py-[0.6vw] border text-center hover:bg-black hover:text-white transition-all rounded-full">
            BUSINESS BOOTCAMP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
