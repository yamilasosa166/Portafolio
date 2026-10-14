const skills = [
  "Angular",
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Laravel",
  "CodeIgniter",
  "PHP",
  "MySQL",
  "SQL",
  "Git",
  "GitHub",
  "Linux",
  "HTML",
  "CSS",
  "Bootstrap",
  "API REST",
  "Business Intelligence",
];

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        Tecnologías
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-900 rounded-xl p-5 text-center hover:bg-slate-800 transition"
          >
            {skill}
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;