import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className="w-full h-full relative bg-cover bg-center bg-[url('./src/Eyes-bg-img.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center gap-10 ">
          <div className="w-[13vw] h-[13vw] flex items-center justify-center bg-zinc-200 rounded-full">
            <div className="w-[8vw] h-[8vw] bg-zinc-800 rounded-full relative">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-5"
              >
                <div className="w-[1.8vw] h-[1.8vw] bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center bg-zinc-200 rounded-full">
            <div className="w-[8vw] h-[8vw] bg-zinc-800 rounded-full relative">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-5"
              >
                <div className="w-[1.8vw] h-[1.8vw] bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
