"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiHome, HiUser, HiRocketLaunch, HiPhone } from "react-icons/hi2"

const menuData = [
  {
    name: "Home",
    href: "/",
    icon: <HiHome />,
  },
  {
    name: "About",
    href: "/about",
    icon: <HiUser />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <HiRocketLaunch />,
  },
]

const Menu = () => {
  const pathname = usePathname()

  return (
    <ul className="flex flex-1 justify-end gap-5 md:gap-8">
      {menuData.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-2xl font-semibold   ${isActive ? "active" : ""}`}
            title={link.name}
          >
            {link.icon}
          </Link>
        )
      })}
    </ul>
  )
}
export default Menu
