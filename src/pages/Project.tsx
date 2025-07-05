import { projectData } from "@/data/project"
import ProjectCard from "@/components/ProjectCard"

const ProjectSection = () => {
    return (
        <div
            id="projects"
            className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 md:p-10"
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8">
                My Projects
            </h1>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectSection