"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroScroll() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Image fades out slowly
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  // Mask text grows massively
  const textScale = useTransform(scrollYProgress, [0.3, 0.6], [1, 6]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  // Final text reveal
  const finalOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.7, 1], [40, 0]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-black">
      
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <motion.img
          src="/gta-hero.jpg"
          alt="Hero"
          style={{ opacity: imageOpacity }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BIG MASK TEXT */}
        <motion.div
          style={{ scale: textScale, opacity: textOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="mask-text">VI</h1>
        </motion.div>

        {/* FINAL TEXT */}
        <motion.div
          style={{ opacity: finalOpacity, y: finalY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <h2 className="text-6xl font-bold mb-4">Grand Theft Auto</h2>
          <p className="text-3xl text-purple-400">Coming November 19, 2026</p>
        </motion.div>

      </div>
    </section>
  );
}
