import Image from "next/image"
import { FaLinkSlash } from "react-icons/fa6"

const ProjectCard = ({ title, links, tags, src }) => {
  return (
    <div className="p-4 rounded-md shadow-md w-full border bg-tertiary text-primary">
      <header className="object-contain relative w-full h-[300px] rounded-md overflow-hidden">
        <Image src={src} alt={`Image if project: ${title}`} fill priority />
      </header>
      <h4 className="my-8 text-2xl font-semibold">{title}</h4>
      <div className="my-8 flex gap-4 items-center flex-start flex-wrap min-h-[84px]">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="border border-ui p-2 text-xs font-semibold rounded-lg text-primary grid place-content-center"
          >
            {tag}
          </div>
        ))}
      </div>
      <footer
        className="flex justify-start font-semibold w-full gap-8 text-md underline underline-offset-2 py-2
      "
      >
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ui transition-colors"
        >
          View Code
        </a>
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ui transition-colors"
        >
          View Demo
        </a>
      </footer>
    </div>
  )
}
export default ProjectCard
