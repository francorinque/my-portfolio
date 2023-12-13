import Link from "next/link"
import Menu from "./Menu"

const Nav = () => {
  return (
    <nav className="flex gap-8 items-center filter drop-shadow  px-4  md:justify-between max-w-7xl mx-auto py-4  ">
      <Link
        href="/"
        className="w-[50px] h-[50px]  flex items-center justify-center shadow-sm bg-tertiary rounded-blobShape"
      >
        <p className="font-bold text-2xl text-primary">FR</p>
      </Link>
      <Menu />
    </nav>
  )
}
export default Nav
