
const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Streams Tech Ltd.",
      location: "Dhaka, Bangladesh",
      period: "Jan 2024 - Present",
      type: "Full-time",
      achievements: [
        "Restructured deployment pipeline and scaled server/database provisioning by 60%",
        "Managed Docker containers, optimized architectures, and improved database security",
        "Automated pull request and deployment notifications with JIRA integration",
        "Built scheduled backups and secure transfer jobs for system resilience"
      ],
      logo: "/lovable-uploads/016002f1-cac3-4f20-ab46-f5f2aa8073c9.png"
    },
    {
      title: "Research Intern",
      company: "SEMERU Lab, William & Mary",
      location: "Virginia, USA",
      period: "2023",
      type: "Internship",
      achievements: [
        "Focused on software system reconstruction using GitHub APIs and OpenAI",
        "Measured LLM-based reconstruction performance and effectiveness",
        "Contributed to cutting-edge research in AI-driven software analysis"
      ],
      logo: "/lovable-uploads/9807cfcd-be71-4379-9c34-282ffd9b28d5.png"
    },
    {
      title: "Trainee Software Engineer",
      company: "Cefalo Bangladesh Ltd.",
      location: "Dhaka, Bangladesh",
      period: "2023",
      type: "Internship",
      achievements: [
        "Worked on social media platform development with NodeJS/React stack",
        "Designed user interface prototypes using Figma",
        "Deployed applications to Netlify and Render platforms"
      ],
      logo: "/lovable-uploads/3f66c540-7a5c-4ceb-a5d0-3dc6647e4bfa.png"
    }
  ];

  return (
    <div className="py-20 px-4 bg-slate-800/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/40 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 rounded-lg object-contain bg-white/10 p-2"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-400">{exp.title}</h3>
                    <h4 className="text-lg text-gray-300">{exp.company}</h4>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                  <p className="text-gray-400 mt-2">{exp.period}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-2 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
