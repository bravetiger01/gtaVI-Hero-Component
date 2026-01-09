"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroScroll() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Hero image fades out
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Background transitions to black
  const bgOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  // VI starts huge from outside screen and scales down, then fades out
  const viScale = useTransform(scrollYProgress, [0, 0.4], [20, 1]);
  const viOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [0, 0.3, 1, 0]);
  
  // VI text color transition from transparent to white
  const viColor = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );

  // Grand Theft Auto text appears after VI fades - starts from outside screen
  const gtaOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const gtaY = useTransform(scrollYProgress, [0.5, 0.65], [200, 0]);
  const gtaScale = useTransform(scrollYProgress, [0.5, 0.65], [2, 1]);

  // Release date appears last
  const dateOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
  const dateY = useTransform(scrollYProgress, [0.75, 0.9], [50, 0]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-black">
      
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <motion.img
          src="/gta-hero.jpg"
          alt="Hero"
          style={{ opacity: imageOpacity }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BLACK BACKGROUND OVERLAY */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-black"
        />

        {/* VI TEXT - Starts huge from outside, scales down, becomes white */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.h1
            style={{ 
              scale: viScale, 
              opacity: viOpacity,
              color: viColor
            }}
            className="text-[10rem] font-black tracking-tighter leading-none -mt-48 "
          >
            VI
          </motion.h1>
        </div>

        {/* GRAND THEFT AUTO TEXT */}
        <motion.div
          style={{ opacity: gtaOpacity, y: gtaY, scale: gtaScale }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        >
          <h3 className="text-lg font-bold text-white tracking-widest">
            VI
          </h3>
          <h2 className="text-6xl md:text-7xl font-bold text-white tracking-wide">
            GRAND THEFT AUTO
          </h2>
        </motion.div>

        {/* RELEASE DATE */}
        <motion.div
          style={{ opacity: dateOpacity, y: dateY }}
          className="absolute inset-0 flex items-center justify-center pt-64"
        >
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-400 mb-3">COMING</p>
            <p className="text-3xl md:text-4xl font-bold text-white">
              NOVEMBER 19, 2026
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
