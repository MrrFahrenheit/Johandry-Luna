import { useState } from 'react';
import SwordIcon from '../assets/images/Sword.png';
import Card from '../components/general-view/ui/Card';
import type { IProject } from '../models/interfaces/IObjects';
import BatIcon from '../assets/images/BatIcon.png';
import SearchBar from '../components/general-view/ui/SearchBar';


export default function Projects() {

    const [projects, setProjects] = useState<Array<IProject>>([]);

    return (
        <main className="w-screen flex flex-col mt-10 gap-6 px-4 md:px-0">
            <div className='flex flex-col gap-2'>
                <div className="flex items-center justify-center gap-2">
                    <img src={SwordIcon} className="md:size-8 size-7" />
                    <h2 className="text-2xl md:text-3xl font-bold dmc-font">Projects</h2>
                </div>
                <div className="h-1 w-36 bg-red-600 mx-auto rounded-full mb-4"></div>
            </div>
            <SearchBar />

            <div className="grid gap-6 md:grid-cols-3">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <Card key={project.id}>
                            <h3 className="text-xl font-semibold mb-2 dmc-font">{project.title}</h3>
                            <p className="text-sm text-zinc-300">{project.description}</p>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full text-center">
                        <img src={BatIcon} className="mx-auto mb-2 size-12" />
                        <p className="text-xl text-zinc-300 dmc-font">Ningun proyecto disponible.</p>
                    </div>
                )}
            </div>
        </main>

    )
}
