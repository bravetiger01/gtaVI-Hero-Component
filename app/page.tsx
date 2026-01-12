"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="page-container">
      <div className="content">
        <div className="logo-mask">
          <div className="background"></div>
        </div>

        <motion.img
          className="slide-1 play-button"
          src="/file.svg"
          alt="Play"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 0.6 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            scale: 0.7,
            filter: "brightness(1.2)",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.55 }}
        />

        <motion.div
          className="slide-1 scroll-logo"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="container">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              WATCH TRAILER
            </motion.p>
            <motion.img
              src="/window.svg"
              alt="Watch Trailer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.svg
          className="slide-1 scroll-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 12"
          width="32"
          height="12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
            ease: "easeOut",
          }}
        >
          <motion.path
            d="M31.7948 1.60281C32.2537 2.47697 31.9171 3.55765 31.0429 4.01658L15.9054 11.9638L0.948843 4.01224C0.0770835 3.54878 -0.253903 2.46636 0.209564 1.5946C0.673031 0.722843 1.75545 0.391857 2.62721 0.855324L15.9159 7.92018L29.381 0.850985C30.2552 0.392054 31.3358 0.728659 31.7948 1.60281Z"
            fill="#f0f0f0"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </motion.svg>

        <motion.div
          className="slide-2-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            WELCOME TO LEONIDA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Grand Theft Auto VI heads to the state of Leonida, home to the
            neon-soaked streets of Vice City and beyond in the biggest, most
            immersive evolution of the Grand Theft Auto series yet. Coming 2025
            to PlayStation 5 and Xbox Series X|S.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              x: 5,
              color: "#ffcc00",
              transition: { duration: 0.2 },
            }}
          >
            Watch Trailer
          </motion.a>
        </motion.div>
      </div>

      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}
