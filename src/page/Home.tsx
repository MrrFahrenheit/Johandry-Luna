import Card from '../components/general-view/ui/Card';
import HomeIcon from '../assets/images/House.png';

export default function Home() {
    return (
        <main className="w-full flex flex-col mt-10 gap-6 px-4">
            <div className='flex flex-col gap-2'>
                <div className="flex items-center justify-center gap-2">
                    <img src={HomeIcon} className="md:size-8 size-7" />
                    <h2 className="text-2xl md:text-3xl font-bold dmc-font">Home</h2>
                </div>
                <div className="h-1 w-20 bg-red-600 mx-auto rounded-full mb-4"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <h3 className="text-xl font-semibold mb-2 dmc-font">👋 About me</h3>
                    <p className="text-sm text-zinc-300">
                        Hello! My name is <strong>Johandry Luna</strong>.
                        I’m a software developer passionate about building
                        full-stack applications.
                        <br /><br />
                        I'm 19 years old and a Practicant Catholic, currently studying
                        Techonologies Engineering at the <strong>UNAN LEON - SEDE SOMOTO</strong> in Nicaragua.
                        I love learning new technologies and improving my skills every day.
                        <br /><br />
                        I play the guitar and read books in my free time, also im a big fan of video games and theology.
                        <br /><br />
                        I love Devil May Cry and Lady Gaga.
                    </p>
                </Card>

                <Card>
                    <h3 className="text-lg font-semibold mb-2">📃 Experience</h3>
                    <ul className="text-sm text-zinc-300 list-disc list-inside">
                        <li>React Native FreeLancer Developer (2024 - Current)</li>
                    </ul>
                </Card>

                <Card>
                    <h3 className="text-lg font-semibold mb-2">🛠️ Tech stack</h3>
                    <ul className="text-sm text-zinc-300 list-disc list-inside">
                        <li>Frontend: React, TypeScript, Tailwind CSS</li>
                        <li>Backend: ASP.NET, FastAPI</li>
                        <li>Databases: SQL, Appwrite</li>
                        <li>Other: Git, REST APIs, JWT Auth</li>
                    </ul>
                </Card>

                <Card>
                    <h3 className="text-lg font-semibold mb-2">🎯 Goals</h3>
                    <p className="text-sm text-zinc-300">
                        Improve system design skills, contribute to open-source,
                        and build products that feel professional, scalable,
                        and well-thought-out.
                    </p>
                </Card>
            </div>
        </main>
    )
}
