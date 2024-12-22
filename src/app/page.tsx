import Header from "@/components/header/header";
import ParticlesBackground from "@/components/ParticleBackground/ParticleBackground";
import Tooltip from "@/components/Tooltip/tooltip";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full relative overflow-hidden">
      <Header />
      <ParticlesBackground />
      <section className="flex flex-col items-center justify-center mt-16 text-center p-16 relative z-10">
        <h1 className="text-xl">
          Hello world <span className="animate-wave">👋</span>, my name is
          Daniel Assis. <br /> I&apos;m a{" "}
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            software developer
          </span>
        </h1>

        <div className="flex items-center justify-center gap-6 bg-white p-4 rounded-full border-2 border-slate-200 shadow-lg mt-8 hover:border-slate-300 transition-all duration-300">
          <span className="text-2xl text-gray-700 hover:text-violet-500 transform hover:scale-110 transition-all duration-300">
            <Link href="https://github.com/nielassis" target="_blank">
              <Tooltip text="Github">
                <BsGithub />
              </Tooltip>
            </Link>
          </span>
          <span className="text-2xl text-gray-700 hover:text-blue-500 transform hover:scale-110 transition-all duration-300">
            <Link href="https://linkedin.com/in/nielassis" target="_blank">
              <Tooltip text="Linkedin">
                <BsLinkedin />
              </Tooltip>
            </Link>
          </span>
          <span className="text-2xl text-gray-700 hover:text-green-500 transform hover:scale-110 transition-all duration-300">
            <Link href="https://wa.link/osr8cz" target="_blank">
              <Tooltip text="WhatsApp">
                <BsWhatsapp />
              </Tooltip>
            </Link>
          </span>
          <span className="text-2xl text-gray-700 hover:text-red-500 transform hover:scale-110 transition-all duration-300">
            <Link href="mailto:nielvitorba@gmail.com" target="_blank">
              <Tooltip text="Email">
                <MdOutlineMailOutline />
              </Tooltip>
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
}
