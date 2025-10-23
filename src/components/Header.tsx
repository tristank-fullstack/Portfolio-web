"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0f172a]/80 backdrop-blur border-b border-[#1e293b] z-50">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo de Tristan"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>

        {/* Menú escritorio */}
        <nav className="hidden sm:flex gap-6 text-sm">
          <Link href="/" className="hover:text-[#3b82f6] transition">Inicio</Link>
          <Link href="/sobre-mi" className="hover:text-[#3b82f6] transition">Sobre mí</Link>
          <Link href="/skills" className="hover:text-[#3b82f6] transition">Habilidades</Link>
          <Link href="/proyectos" className="hover:text-[#3b82f6] transition">Proyectos</Link>
          <Link href="/contacto" className="hover:text-[#3b82f6] transition">Contacto</Link>
        </nav>

        {/* Botón hamburguesa en móvil */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="sm:hidden bg-[#0f172a] px-6 py-4 flex flex-col gap-4 text-sm">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#3b82f6] transition">Inicio</Link>
          <Link href="/sobre-mi" onClick={() => setOpen(false)} className="hover:text-[#3b82f6] transition">Sobre mí</Link>
          <Link href="/skills" onClick={() => setOpen(false)} className="hover:text-[#3b82f6] transition">Habilidades</Link>
          <Link href="/proyectos" onClick={() => setOpen(false)} className="hover:text-[#3b82f6] transition">Proyectos</Link>
          <Link href="/contacto" onClick={() => setOpen(false)} className="hover:text-[#3b82f6] transition">Contacto</Link>
        </div>
      )}
    </header>
  );
}
