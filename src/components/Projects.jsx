const projects = [
  {
    title: "Mi Mundo Personal",
    company: "Konecta S.A - Núcleo Paraguay",
    period: "2024 - Actualidad",
    description:
      "Participación en el desarrollo Front-End de la plataforma Mi Mundo Personal, utilizando Angular, Node.js e integración con APIs y servicios web.",
    technologies: ["Angular", "TypeScript", "Node.js", "Git", "API REST"],
    link: "#"
  },
  {
    title: "Siembra Digital 2.0",
    company: "Software Natura",
    period: "2021 - 2022",
    description:
      "Desarrollo de interfaces Front-End para la plataforma educativa Siembra Digital 2.0.",
    technologies: ["HTML", "CSS", "JavaScript", "Laravel"],
    link: "https://siembradigital.com.py"
  },
  {
    title: "Siembra Digital 1.0",
    company: "Software Natura",
    period: "2021",
    description:
      "Participación como desarrolladora Front-End en la primera versión de la plataforma educativa.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://siembradigital.com.py"
  },
  {
    title: "CRM Empresarial",
    company: "EPEM",
    period: "2023",
    description:
      "Colaboración en el desarrollo Front-End y Back-End de un sistema CRM interno para gestión empresarial.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    link: "#"
  },
  {
    title: "Business Intelligence",
    company: "EPEM",
    period: "2023",
    description:
      "Diseño de consultas SQL, creación de reportes y optimización de flujos de datos para la toma de decisiones.",
    technologies: ["SQL", "Power BI", "Business Intelligence"],
    link: "#"
  },
  {
    title: "Sistemas de Gestión LocalNet",
    company: "LocalNet",
    period: "2023 - 2024",
    description:
      "Desarrollo e implementación de mejoras utilizando CodeIgniter y arquitectura MVC para sistemas empresariales.",
    technologies: ["CodeIgniter", "PHP", "MySQL", "MVC"],
    link: "#"
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        Proyectos Destacados
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-cyan-500 transition"
          >
            <h3 className="text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="text-cyan-400 mt-2">
              {project.company}
            </p>

            <p className="text-gray-500 text-sm mb-4">
              {project.period}
            </p>

            <p className="text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Ver proyecto →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;