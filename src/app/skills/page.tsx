import Image from "next/image";

const skills = [
  {
    categoria: "Lenguajes",
    items: [
      { name: "Java", icon: "/icons/java.png" },
      { name: "Kotlin", icon: "/icons/kotlin.png" },
      { name: "JavaScript", icon: "/icons/javascript.png" },
      { name: "SQL", icon: "/icons/sql.png" },
      { name: "Python", icon: "/icons/python.png" },
    ],
  },
  {
    categoria: "Frameworks",
    items: [
      { name: "Spring Boot", icon: "/icons/spring.png" },
      { name: "React", icon: "/icons/react.png" },
      { name: "Next.js", icon: "/icons/next.png" },
    ],
  },
  {
    categoria: "Entornos de Desarrollo",
    items: [
      { name: "Android Studio", icon: "/icons/android.png" },
      { name: "VS Code", icon: "/icons/vscode.png" },
      { name: "IntelliJ", icon: "/icons/intellij.png" },
    ],
  },
  {
    categoria: "Herramientas",
    items: [
      { name: "Git", icon: "/icons/git.png" },
      { name: "GitHub", icon: "/icons/github.png" },
      { name: "Maven", icon: "/icons/maven.png" },
      { name: "Snipe-it", icon: "/icons/snipeit.png" },
      { name: "Odoo", icon: "/icons/odoo.png" },
    ],
  },
  {
    categoria: "Bases de Datos",
    items: [
      { name: "MySQL", icon: "/icons/mysql.png" },
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
    ],
  },
  {
    categoria: "Sistemas",
    items: [
      { name: "Windows", icon: "/icons/windows.png" },
      { name: "Linux", icon: "/icons/linux.png" },
    ],
  },
];

export default function Habilidades() {
  return (
    <section className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title text-center text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12">
          Habilidades
        </h2>

        <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 flex flex-col h-full"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#3b82f6] mb-4 sm:mb-6 text-center">
                {skill.categoria}
              </h3>
              <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-items-center flex-grow">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex flex-col items-center">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-transform duration-200 hover:scale-110"
                    />
                    <span className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-center text-[#cbd5e1]">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
