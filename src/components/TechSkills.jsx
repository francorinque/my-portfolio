"use client"

import { techSkillsData } from "@/constants"
import Image from "next/image"
import Tilt from "react-parallax-tilt"

const TechSkills = () => {
  return (
    <div className="py-20">
      <h2 className="mb-10">Tech Skills</h2>

      <div className="grid grid-cols-skillsGrid gap-8 place-content-center">
        {techSkillsData.map((item, index) => (
          <Tilt key={index}>
            <div className=" border border-ui w-full h-[106px] grid place-content-center rounded-sm p-7 group hover:bg-ui/30 transition">
              <Image
                src={item}
                width={50}
                height={50}
                alt="tech skill image"
                className="object-contain group-hover:scale-125 transition-transform"
              />
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}
export default TechSkills
