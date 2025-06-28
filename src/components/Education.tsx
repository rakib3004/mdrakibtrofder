
const Education = () => {
  const education = [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "University of Dhaka",
      department: "Institute of Information Technology (IIT)",
      period: "2018-2023",
      grade: "CGPA 3.78/4.00",
      logo: "/lovable-uploads/0e990ffe-7287-4b73-88c9-19ad5383d7a4.png",
      type: "Bachelor's Degree"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Notre Dame College",
      department: "Science Group",
      period: "2016-2018",
      grade: "GPA 5.00/5.00",
      logo: "/lovable-uploads/03aae794-06a9-467e-b3bd-2f0f4adce92f.png",
      type: "Higher Secondary"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Kurmitola High School & College",
      department: "Science Group",
      period: "2014-2016",
      grade: "GPA 5.00/5.00",
      logo: "/lovable-uploads/1457d719-46d6-4eff-be49-3c0d83f62a84.png",
      type: "Secondary School"
    }
  ];

  return (
    <div className="py-20 px-4 bg-slate-800/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/40 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-20 h-20 rounded-lg object-contain bg-white/5 p-2 border border-slate-600"
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-400 mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-white font-medium">
                        {edu.institution}
                      </h4>
                      <p className="text-gray-400">
                        {edu.department}
                      </p>
                    </div>
                    
                    <div className="mt-2 md:mt-0 text-left md:text-right">
                      <span className="bg-indigo-400/10 text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.type}
                      </span>
                      <p className="text-gray-400 mt-2">{edu.period}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg p-4 border border-emerald-500/20">
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400 font-semibold">Academic Performance:</span>
                      <span className="text-white font-bold text-lg">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Academic Excellence</h3>
            <p className="text-gray-300">
              Consistently achieved outstanding academic performance with perfect scores in both 
              secondary and higher secondary education, and strong performance in software engineering studies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
