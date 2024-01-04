import Image from "next/image"
import { FaLinkSlash } from "react-icons/fa6"

const ProjectCard = ({ title, links, src }) => {
  return (
    <div className="p-4 rounded-md shadow-md w-full border bg-tertiary text-primary ">
      <header className="object-contain relative w-full h-[300px] rounded-md overflow-hidden">
        <Image src={src} alt={`Project image name: ${title}`} fill priority />
      </header>
      <h4 className="mt-5  text-2xl font-semibold">{title}</h4>

      <footer
        className="flex justify-start font-semibold w-full gap-8 text-md py-4
        text-gray-500
      "
      >
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ui transition-colors duration-300"
        >
          View Code
        </a>
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ui transition-colors duration-300"
        >
          View Demo
        </a>
      </footer>
    </div>
  )
}
export default ProjectCard
