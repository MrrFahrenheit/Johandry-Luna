import ProjectCard from "../general-view/ui/ProjectCard"
import MindMeshLogo from "../../assets/images/MindMesh.jpeg";

interface Project{
    id:number,
    title:string,
    description:string,
    image:string,
    githubLink?:string,
    link:string
}

const projects:Array<Project> = [
    {
        id:1,
        title:"MindMesh",
        description:"MindMesh is a tool designed to create self-organized maps in a simple, fast and intuitive way.",
        image:MindMeshLogo,
        link:"https://mrrfahrenheit.github.io/MindMesh/",
        githubLink:"https://github.com/MrrFahrenheit/MindMesh"
    }
]

export default function ProjectSection() {
    return (
        <div className="grid gap-6 md:grid-cols-3 p-3">
            {projects.map((project) => (
                <ProjectCard  project={project} key={project.id} />
            ))}
        </div>
    )
}
