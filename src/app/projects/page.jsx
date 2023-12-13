import ProjectCard from "@/components/ProjectCard"
import { projectsData } from "@/constants"

export const metadata = {
  title: "FR - Projects",
  description: "Projects page",
}

const page = () => {
  return (
    <section>
      <h2 className="text-center">My Projects</h2>

      <div className="grid grid-cols-projectsGrid gap-8 place-content-center mt-20">
        {projectsData.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
export default page
