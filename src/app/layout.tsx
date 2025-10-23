import "./globals.css";
import { Inter } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tristan Kempes | Desarrollador",
  description: "Portafolio de Tristan: Android, Java, APIs y más.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#0f172a] text-[#f1f5f9] text-justify`}>
        <div className="h-screen grid grid-rows-[auto,1fr,auto]">

          <Header />

          <main className="overflow-y-auto">{children}</main>

          <footer className="border-t border-[#1e293b] bg-[#0f172a] z-50">
            <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-6 grid gap-4 sm:grid-cols-3 sm:gap-6 text-sm">

              {/* Bloque 1: Nombre y descripción → solo visible en escritorio */}
              <div className="hidden sm:block">
                <div className="font-bold text-white">Tristan Kempes</div>
                <p className="mt-2 text-[#94a3b8]">
                  Desarrollador de apps con Java, Kotlin, Spring Boot, Firebase.
                </p>
              </div>

              {/* Bloque 2: Contacto → visible en todos los tamaños */}
              <div>
                <div className="font-bold text-white">Contacto</div>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2">
                    <SiGmail className="text-red-500" />
                    <span className="select-all">tristankempes@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLinkedin className="text-blue-500" />
                    <a
                      href="https://www.linkedin.com/in/tristan-kempes-ares-685270333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaGithub className="text-white" />
                    <a
                      href="https://github.com/tristank-fullstack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>

              {/* Bloque 3: Tecnologías → solo visible en escritorio */}
              <div className="hidden sm:block">
                <div className="font-bold text-white">Tecnologías</div>
                <p className="mt-2 text-[#94a3b8]">
                  Java, Spring Boot, Kotlin, Android, Firebase, React, Next.js.
                </p>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
