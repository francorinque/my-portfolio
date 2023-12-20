import Link from "next/link"
import Menu from "./Menu"

const Nav = () => {
  return (
    <nav className="flex gap-20 items-center filter drop-shadow  px-4 mb-20  md:justify-between mx-auto py-4  max-w-7xl w-full ">
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
