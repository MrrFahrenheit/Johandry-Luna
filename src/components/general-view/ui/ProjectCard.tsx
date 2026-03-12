
import type { IProject } from '../../../models/interfaces/IObjects';
import Card from './Card';

interface ProjectCardProps {
    project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { title, description, githubLink, link, image } = project;

    return (
        <Card classname="items-center flex flex-col">
            <img
                src={image}
                alt={title}
                className="w-full max-w-xs h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 dmc-font">{title}</h3>
            <p className="text-sm text-zinc-300 mb-4">{description}</p>
            <div className="flex gap-4">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white text-sm"
                    >
                        GitHub
                    </a>
                )}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-sm"
                    >
                        Demo
                    </a>
                )}
            </div>
        </Card>
    );
}
