import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[80vh] md:min-h-[80vh] overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl mb-8">Contacto</h2>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-3">
          {/* Gmail */}
          <div className="bg-[#1e293b] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center">
            <SiGmail className="text-4xl text-red-500 mb-3" />
            <span className="text-base text-white font-bold">Correo</span>
            <span className="text-sm text-[#94a3b8] mt-2 select-all">
              tristankempes@gmail.com
            </span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tristan-kempes-ares-685270333"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1e293b] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center hover:bg-[#3b82f6]/20 transition"
          >
            <FaLinkedin className="text-4xl text-blue-500 mb-3" />
            <span className="text-base text-white font-bold">LinkedIn</span>
            <span className="text-sm text-[#94a3b8] mt-2">
              /tristan-kempes-ares
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/tristank-fullstack"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1e293b] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center hover:bg-[#3b82f6]/20 transition"
          >
            <FaGithub className="text-4xl text-white mb-3" />
            <span className="text-base text-white font-bold">GitHub</span>
            <span className="text-sm text-[#94a3b8] mt-2">
              @tristank-fullstack
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
