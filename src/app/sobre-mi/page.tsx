import Image from "next/image";

export default function SobreMi() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl mb-6">
          Sobre mí
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-[#cbd5e1] leading-relaxed text-left">
          Soy <strong className="text-[#3b82f6]">desarrollador full stack</strong> con formación en desarrollo multiplataforma
          y experiencia en soporte IT. Me apasiona aprender nuevas tecnologías y aplicarlas en proyectos que aporten valor real,
          tanto en el <strong className="text-[#3b82f6]">front-end</strong> como en el <strong className="text-[#3b82f6]">back-end</strong>.
          He trabajado en entornos donde la resolución de problemas y la colaboración en equipo eran clave, lo que me ha permitido
          desarrollar una mentalidad <strong className="text-[#3b82f6]">proactiva y resolutiva</strong>.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-[#cbd5e1] leading-relaxed mt-4 text-left">
          En mi trayectoria he participado en proyectos que van desde la gestión de bases de datos hasta el desarrollo de
          aplicaciones web y móviles, además de mantener mi propio <strong className="text-[#3b82f6]">portfolio online </strong>
          donde muestro parte de mi trabajo. Mi objetivo es seguir creciendo como profesional, contribuyendo a equipos dinámicos
          y enfrentando nuevos retos que me permitan evolucionar tanto en lo técnico como en lo personal.
        </p>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Image
            src="/foto.png"
            alt="Sobre mí - Tristan Kempes"
            width={448}
            height={448}
            className="rounded-lg shadow-lg w-48 sm:w-64 md:w-80 lg:w-[28rem] max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
