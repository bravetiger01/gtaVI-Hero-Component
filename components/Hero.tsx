"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const gtaRef = useRef<HTMLHeadingElement>(null)
  const comingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      })

      // GTA enters & scales
      tl.fromTo(
        gtaRef.current,
        {
          y: "120%",
          scale: 2.5,
        },
        {
          y: "0%",
          scale: 1,
          ease: "power3.out",
          duration: 2,
        }
      )

      // Image inside text fades → white
      tl.to(gtaRef.current, {
        backgroundPosition: "100% 50%",
        duration: 1,
      })

      // Background turns black
      tl.to(
        sectionRef.current,
        {
          backgroundColor: "#000",
          duration: 1,
        },
        "-=0.8"
      )

      // GTA moves up subtly
      tl.to(gtaRef.current, {
        y: "-30%",
        opacity: 0.6,
        scale: 0.9,
        duration: 1,
      })

      // Coming November 18
      tl.fromTo(
        comingRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.5"
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="hero">
      <h1 ref={gtaRef} className="gta-text">
        GRAND THEFT AUTO
      </h1>

      <div ref={comingRef} className="coming">
        <span>Coming</span>
        <strong>November 18</strong>
      </div>
    </section>
  )
}
