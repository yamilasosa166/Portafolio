function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        Sobre mí
      </h2>

      <p className="text-gray-300 leading-8">
        Soy Ingeniera en Sistemas Informáticos egresada de
        la Universidad Nacional del Caaguazú.

        Actualmente me desempeño como Programadora Front-End
        en Konecta S.A., participando en proyectos de gran
        escala utilizando Angular, Node.js e integración
        de APIs.

        Me considero una persona proactiva, responsable,
        creativa y comprometida con el aprendizaje continuo.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">

        <div className="bg-slate-900 p-5 rounded-xl">
          <h3 className="font-bold text-cyan-400">
            Español
          </h3>
          <p>Avanzado</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl">
          <h3 className="font-bold text-cyan-400">
            Guaraní
          </h3>
          <p>Avanzado</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl">
          <h3 className="font-bold text-cyan-400">
            Inglés
          </h3>
          <p>Intermedio</p>
        </div>

      </div>
    </section>
  );
}

export default About;