import MeCard from '../assets/images/BussinesCard.png';
import Pantocrator from "../assets/images/Cristo buen pastor  Flor Juárez.jfif";
import Batman from "../assets/images/eh.jfif";
import Github from "../assets/images/GH.png";
import LadyGaga from "../assets/images/lady gaga _ joker_ folie a deux interviews _ icons _3.jfif";
import Linkedin from "../assets/images/Linkedin.png";
import WhatsApp from "../assets/images/WhatsApp.png";
import Card from '../components/general-view/ui/Card';
import LadyGaga2 from "../assets/images/Lady Gaga.jfif";
import Batman2 from "../assets/images/descarga.jfif";
import Dante from "../assets/images/there’s light in the darkest of places.jfif";

export default function AboutMe() {
    return (
        <main className="w-screen flex flex-col mt-10 gap-6 px-4 md:px-0">
            <div className='flex flex-col gap-2'>
                <div className="flex items-center justify-center gap-2">
                    <img src={MeCard} className="md:size-8 size-7" />
                    <h2 className="text-2xl md:text-3xl font-bold dmc-font">About Johandry Luna</h2>
                </div>
                <div className="h-1 w-72 bg-red-600 mx-auto rounded-full mb-4"></div>
            </div>

            {/* contact card */}
            <Card>
                <h3 className="text-xl font-semibold mb-2 dmc-font">Get in touch</h3>
                <p className="text-sm text-zinc-300 mb-4">
                    Feel free to contact me through any of the platforms below. I'd love to
                    connect and discuss potential collaborations or answer any questions.
                </p>
                <div className="flex items-center justify-start gap-6">
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={WhatsApp}
                            alt="WhatsApp"
                            className="h-8 w-8 hover:opacity-75 transition"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Linkedin}
                            alt="LinkedIn"
                            className="h-8 w-8 hover:opacity-75 transition"
                        />
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Github}
                            alt="GitHub"
                            className="h-8 w-8 hover:opacity-75 transition"
                        />
                    </a>
                </div>
            </Card>

{/* skills section */}
            <Card className="relative overflow-hidden">
                <h3 className="text-xl font-semibold mb-2 dmc-font">My Skills</h3>
                <p className="text-sm text-zinc-300 mb-4">
                    Here are some of the technologies and languages I work with:
                </p>
                <ul className="list-disc list-inside text-zinc-100">
                    <li>C#</li>
                    <li>C++</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                </ul>

                {/* decorative images inside skills card */}
                <div className="absolute inset-0 flex justify-center items-center gap-8 pointer-events-none">
                    <img
                        src={LadyGaga2}
                        alt="Lady Gaga decorative"
                        className="h-48 w-auto opacity-20"
                    />
                    <img
                        src={Batman2}
                        alt="Batman decorative"
                        className="h-40 w-auto opacity-20"
                    />
                    <img
                        src={Dante}
                        alt="Dante decorative"
                        className="h-52 w-auto opacity-20"
                    />
                </div>
            </Card>

            {/* old decorative images below */}
            <div className="relative mt-10 flex justify-center items-center gap-16 min-h-[320px]">
                <img
                    src={LadyGaga}
                    alt="Lady Gaga"
                    className="h-64 w-auto opacity-30"
                />
                <img
                    src={Pantocrator}
                    alt="Pantocrator"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-auto opacity-60 z-10"
                />
                <img
                    src={Batman}
                    alt="Batman"
                    className="h-56 w-auto opacity-30"
                />
            </div>
            </main>
    )
}   
