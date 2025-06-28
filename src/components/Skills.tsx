
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C#", "TypeScript", "Java"],
      color: "emerald"
    },
    {
      title: "Frameworks",
      skills: ["Angular", "ASP.NET", "Flask", "ReactJS", "NestJS"],
      color: "blue"
    },
    {
      title: "Technologies",
      skills: ["Docker", "Git", "PostgreSQL", "NGINX", "Shell", "MongoDB"],
      color: "purple"
    },
    {
      title: "Cloud & Tools",
      skills: ["Jenkins", "GitHub", "Bitbucket", "GCP", "AWS", "Linux"],
      color: "cyan"
    },
    {
      title: "Specialties",
      skills: ["CI/CD", "Containerization", "System Optimization", "Cloud Monitoring"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400",
      pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} rounded-lg p-6 border backdrop-blur-sm hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800/50 px-3 py-1 rounded-full text-sm text-gray-300 border border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-300">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Kubernetes", "AWS IAM", "MySQL", "Git", "Linux Admin", "System Administration"].map((cert) => (
              <div
                key={cert}
                className="bg-slate-800/30 border border-slate-600 px-4 py-2 rounded-lg text-emerald-400 font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
