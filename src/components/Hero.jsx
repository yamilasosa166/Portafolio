function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">

        <p className="text-cyan-400 mb-4">
          Ingeniera en Sistemas Informáticos
        </p>

        <h1 className="text-6xl font-bold mb-6">
          Yamila Gisell Benítez Sosa
        </h1>

        <p className="text-gray-300 text-xl leading-relaxed">
          Desarrolladora Front-End especializada en Angular,
          JavaScript y tecnologías web modernas.
          Con experiencia en desarrollo de software,
          Business Intelligence y análisis de datos.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href="#contact"
            className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600"
          >
            Contactar
          </a>

          <a
            href="https://www.linkedin.com/in/yamila-sosa-00119a218"
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-500 px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;