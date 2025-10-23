export default function Proyectos() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="section-title text-center">Proyectos</h2>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {/* Proyecto HearMe */}
          <div className="bg-[#1e293b] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-[#3b82f6] mb-3 sm:mb-4">HearMe</h3>
              <p className="text-sm sm:text-base md:text-lg text-[#cbd5e1] mb-4 sm:mb-6 text-left">
                HearMe es un ecosistema formado por una app Android y una API en Java con Spring Boot.
                La app graba y transcribe audios en tiempo real, asociando cada registro a su ubicación
                mediante la API de Google Maps. La API propia gestiona la transcripción de audio y devuelve
                el texto procesado de forma rápida y segura.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/tristank-fullstack/HearMe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#3b82f6] text-white font-medium hover:bg-[#2563eb] transition text-sm sm:text-base text-center"
              >
                Ver App en GitHub
              </a>
              <a
                href="https://github.com/tristank-fullstack/HearMe-API"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-[#3b82f6] text-[#3b82f6] font-medium hover:bg-[#3b82f6] hover:text-white transition text-sm sm:text-base text-center"
              >
                Ver API en GitHub
              </a>
            </div>
          </div>

          {/* Placeholder futuros proyectos */}
          <div className="bg-[#111827] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col justify-between border-2 border-dashed border-[#3b82f6] h-full">
            <div>
              <h3 className="text-2xl font-bold text-[#3b82f6] mb-3 sm:mb-4">Futuros proyectos</h3>
              <p className="text-xs sm:text-sm md:text-base text-[#94a3b8] mb-4 sm:mb-6 text-left">
                Aquí aparecerán nuevos desarrollos. Esta tarjeta se ajusta automáticamente a la altura
                de la más alta en la fila.
              </p>
            </div>
            <a
              href="https://github.com/tristank-fullstack"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-[#3b82f6] text-[#3b82f6] font-medium hover:bg-[#3b82f6] hover:text-white transition text-sm sm:text-base text-center"
            >
              Mi GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
