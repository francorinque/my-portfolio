import { FaLinkedin, FaGithub, FaEnvelope, FaFileLines } from "react-icons/fa6"

const socialData = [
  {
    href: "https://github.com/francorinque",
    title: "Linkedin",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.linkedin.com/in/franco-agustin-rinque/",
    title: "Github",
    icon: <FaGithub />,
  },
  {
    href: "mailto:francoagustinrinquecorreo@gmail.com",
    title: "Correo",
    icon: <FaEnvelope />,
  },
  {
    href: "/my-cv.pdf",
    title: "Curriculum vitae",
    icon: <FaFileLines />,
  },
]

const Social = () => {
  return (
    <div className="w-full py-5 flex justify-center gap-4">
      {socialData.map((item, index) => (
        <a
          href={item.href}
          key={index}
          title={item.title}
          target="_blank"
          rel="noreferrer"
          className="bg-ui p-2 rounded-sm text-primary grid place-content-center hover:scale-125 transition-transform "
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}
export default Social
