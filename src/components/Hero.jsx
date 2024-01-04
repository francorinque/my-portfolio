"use client"

import Image from "next/image"

import Tilt from "react-parallax-tilt"
import Social from "./Social"

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-around gap-5 md:gap-0 relative ">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="mx-auto  max-w-[600px] text-center">
          Hello, I&apos;m Franco Rinque
        </h1>
        <p className="text-2xl">Full Stack Developer</p>
        <Social />
      </div>

      <Tilt>
        <div
          className="w-[350px] h-[350px] relative  backdrop-blur-md  rounded-blobShape
         flex items-center justify-center overflow-hidden  realtive z-1 bg-tertiary"
        >
          <Image
            src="/perfil-nobg.png"
            alt="franco rinque perfil"
            className="object-cover"
            fill
          />
        </div>
      </Tilt>
    </div>
  )
}
export default Hero
