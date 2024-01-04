import TechSkills from "@/components/TechSkills"

export const metadata = {
  title: "FR - About",
  description: "About me",
}

const AboutPage = () => {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-extrabold  mb-4 md:text-7xl">About me</h2>
      <p className="text-secundary leading-7 max-w-2xl my-4 mx-auto">
        An enthusiast of web design and new technologies. I constantly seek to
        improve my skills and stand out for my flexibility in the face of
        change.
      </p>
      <p className="text-secundary leading-7 max-w-2xl my-4 mx-auto">
        I enjoy collaborating as a team, where I believe creativity flourishes.
        With my focused approach to web design, I aspire to add significant
        value to each project. Let&apos;s build something great together!
      </p>
      <TechSkills />
    </section>
  )
}
export default AboutPage
