
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Software System Reconstruction Tool",
      description: "Advanced tool for GitHub mining and Java-to-JSON translation using LLMs to regenerate software structures and analyze system architectures.",
      technologies: ["Python", "NestJS", "ReactJS", "GitHub API", "OpenAI"],
      features: [
        "GitHub repository mining and analysis",
        "Java codebase to JSON structure conversion",
        "LLM-powered software reconstruction",
        "Performance metrics and analysis"
      ],
      type: "Research Project"
    },
    {
      title: "Blog Bee – Video to Blog Tool",
      description: "Innovative platform that converts video speech content into structured blog posts with intelligent recommendations and content optimization.",
      technologies: ["Python", "NodeJS", "Angular", "Speech Recognition"],
      features: [
        "Video speech to text conversion",
        "Automated blog content generation",
        "Content recommendations engine",
        "SEO optimization features"
      ],
      type: "Web Application"
    },
    {
      title: "Vaccine Management System",
      description: "Scalable platform for vaccine registration, appointment scheduling, and digital certificate generation with robust cloud infrastructure.",
      technologies: ["React", "NodeJS", "MongoDB", "AWS EC2", "S3", "CloudFront"],
      features: [
        "User registration and verification",
        "Appointment scheduling system",
        "Digital certificate generation",
        "Cloud-based file storage and CDN"
      ],
      type: "Full-Stack Application"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Research Project": "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
      "Web Application": "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400",
      "Full-Stack Application": "from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-400"
    };
    return colors[type as keyof typeof colors] || colors["Web Application"];
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/40 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className={`bg-gradient-to-r ${getTypeColor(project.type)} px-3 py-1 rounded-full text-sm font-medium border`}>
                  {project.type}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-emerald-400 mb-3">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700/50 px-2 py-1 rounded text-xs text-gray-300 border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
