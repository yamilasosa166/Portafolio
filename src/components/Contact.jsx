function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-24 text-center"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">
        Contacto
      </h2>

      <div className="space-y-5 text-lg">

        <p>
          📧 yamilasosa166@gmail.com
        </p>

        <p>
          📱 0992 588636
        </p>

        <a
          href="https://www.linkedin.com/in/yamila-sosa-00119a218"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 block"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 block"
        >
          GitHub
        </a>

      </div>
    </section>
  );
}

export default Contact;