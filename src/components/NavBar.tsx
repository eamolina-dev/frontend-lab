import { useState } from "react";

type Props = {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
};

const Navbar = ({ field1, field2, field3, field4 }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Marca */}
        <div className="text-xl font-semibold tracking-tight">ARREDONDO</div>

        {/* Links desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#info" className="hover:text-gray-500 transition">
            {field1}
          </a>
          <a href="#recorrido" className="hover:text-gray-500 transition">
            {field2}
          </a>
          <a href="#results" className="hover:text-gray-500 transition">
            {field3}
          </a>
          <a href="#contacto" className="hover:text-gray-500 transition">
            {field4}
          </a>
        </nav>

        {/* Botón CTA desktop */}
        <div className="hidden md:block">
          <a
            href="https://tyr.com.ar/arredondo2025insc/inscriptionsshort?layout=formonline&amp%3Bidx=491&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnqLbQXcaCkSTsjw3I3TugQBDR8nabMrNdCTzXr9dHyCUxl1WdwqwkzVGdFq4_aem_F6jqE6vBxp1Kamj99asvBw"
            className="px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition"
          >
            Inscribirme
          </a>
        </div>

        {/* Botón mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm font-medium bg-white border-t border-gray-200">
          <a href="#info" onClick={() => setOpen(false)}>
            {field1}
          </a>
          <a href="#recorrido" onClick={() => setOpen(false)}>
            {field2}
          </a>
          <a href="#results" onClick={() => setOpen(false)}>
            {field3}
          </a>
          <a href="#contacto" onClick={() => setOpen(false)}>
            {field4}
          </a>

          <a
            href="https://tyr.com.ar/arredondo2025insc/inscriptionsshort?layout=formonline&amp%3Bidx=491&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnqLbQXcaCkSTsjw3I3TugQBDR8nabMrNdCTzXr9dHyCUxl1WdwqwkzVGdFq4_aem_F6jqE6vBxp1Kamj99asvBw"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block text-center px-4 py-2 rounded-full bg-black text-white"
          >
            Inscribirme
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
