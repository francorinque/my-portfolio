"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Template = ({ children }) => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
      className="max-w-7xl py-20 mx-auto px-4"
    >
      {children}
    </motion.section>
  )
}
export default Template
