import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[80vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]" />

      <div className="relative text-center px-6 max-w-3xl">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Hola, soy <span className="text-[#3b82f6]">Tristan</span>
          </h1>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-sm sm:text-base md:text-lg text-[#cbd5e1] leading-relaxed">
            <strong className="text-[#3b82f6]">Técnico informático y desarrollador fullstack</strong> con experiencia en
            <strong className="text-[#3b82f6]"> Java, Kotlin, Spring Boot y Firebase</strong>.
            Esta web está desarrollada con <strong className="text-[#3b82f6]">Node.js</strong> y <strong className="text-[#3b82f6]">React</strong>,
            y aquí encontrarás una selección de mis proyectos junto a las tecnologías que utilizo en mi día a día.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/proyectos"
              className="px-6 py-3 rounded-full bg-[#3b82f6] text-white font-medium hover:bg-[#2563eb] transition text-sm sm:text-base text-center"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-3 rounded-full border border-[#3b82f6] text-[#3b82f6] font-medium hover:bg-[#3b82f6] hover:text-white transition text-sm sm:text-base text-center"
            >
              Contacto
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
