function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="font-bold text-xl text-cyan-400">
          Yamila Benítez
        </h1>

        <div className="space-x-6">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experiencia</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
``