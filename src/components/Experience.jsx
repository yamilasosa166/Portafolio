const jobs = [
  {
    company: "Konecta S.A",
    period: "Sep 2024 - Actualidad",
    description:
      "Desarrollo Front-End con Angular, Node.js, integración de APIs, Git, Trello, ClickUp y trabajo colaborativo."
  },
  {
    company: "LocalNet",
    period: "Oct 2023 - Oct 2024",
    description:
      "Desarrollo e implementación de mejoras utilizando CodeIgniter y arquitectura MVC."
  },
  {
    company: "EPEM",
    period: "Jul 2023 - Nov 2023",
    description:
      "Desarrollo Front-End y Back-End con Laravel. Soporte al área de análisis de datos."
  },
  {
    company: "EPEM",
    period: "Mar 2023 - Jul 2023",
    description:
      "Ingeniería de Datos, SQL, reportes y Business Intelligence."
  },
  {
    company: "Software Natura",
    period: "2021 - 2022",
    description:
      "Desarrolladora Front-End para los proyectos educativos Siembra Digital 1.0 y 2.0."
  }
];

function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">
        Experiencia Laboral
      </h2>

      <div className="space-y-6">

        {jobs.map((job) => (
          <div
            key={job.company + job.period}
            className="bg-slate-900 p-6 rounded-xl"
          >
            <h3 className="font-bold text-xl text-cyan-400">
              {job.company}
            </h3>

            <p className="text-gray-400">
              {job.period}
            </p>

            <p className="mt-4 text-gray-300">
              {job.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;