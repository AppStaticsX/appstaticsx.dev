import React from 'react';

const Skills = () => {
  // Define all the skills data organized by categories
  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 87, color: 'stroke-blue-500' },
        { name: 'Android (Java)', level: 85, color: 'stroke-green-500' },
        { name: 'Android (Kotlin)', level: 60, color: 'stroke-purple-500' },
        { name: 'iOS Development', level: 70, color: 'stroke-gray-500' },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 80, color: 'stroke-orange-500' },
        { name: 'Kotlin', level: 65, color: 'stroke-purple-500' },
        { name: 'Dart', level: 85, color: 'stroke-blue-500' },
        { name: 'Python', level: 82, color: 'stroke-yellow-500' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Android Studio', level: 90, color: 'stroke-green-500' },
        { name: 'VS Code', level: 88, color: 'stroke-blue-500' },
        { name: 'Firebase', level: 85, color: 'stroke-yellow-500' },
        { name: 'Git', level: 90, color: 'stroke-gray-500' },
      ],
    },
  ];

  // Component for creating animated circular progress bars
  interface CircularProgressProps {
    percentage: number;
    color: string;
    size?: number;
    strokeWidth?: number;
  }

  const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, color, size = 80, strokeWidth = 6 }) => {
    // Calculate circle dimensions and animation values
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
        >
          {/* Background circle - the gray circle behind the progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-gray-200 dark:text-gray-700"
          />
          {/* Progress circle - the colored circle that shows the skill level */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className={`${color} transition-all duration-1000 ease-out drop-shadow-lg`}
            style={{
              strokeDashoffset: strokeDashoffset,
              animation: `drawCircle-${percentage} 2s ease-out forwards`
            }}
          />
        </svg>
        {/* Percentage text in the center of the circle */}
        <span className="absolute text-sm font-bold text-gray-700 dark:text-gray-300">
          {percentage}%
        </span>
        
        {/* Dynamic animation keyframes for each skill level */}
        <style>{`
          @keyframes drawCircle-${percentage} {
            from {
              stroke-dashoffset: ${circumference};
            }
            to {
              stroke-dashoffset: ${strokeDashoffset};
            }
          }
        `}</style>
      </div>
    );
  };

  return (
    <>
      {/* CSS animations for the entire component */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with title and description */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 rounded-full mx-auto mb-6 shadow-lg shadow-blue-500/50 dark:shadow-blue-400/50 animate-glow"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to create amazing mobile applications and Python solutions
            </p>
          </div>

          {/* Skills categories grid - displays each category as a card */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                
                {/* Skills grid within each category */}
                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col items-center group">
                      <div className="mb-3">
                        <CircularProgress 
                          percentage={skill.level} 
                          color={skill.color}
                          size={80}
                          strokeWidth={6}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications section */}
          <div className="mt-16 text-center animate-fade-in-up animation-delay-1000">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Certifications & Achievements
            </h3>
            
            {/* Certifications grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Endpoint Security Certified',
                'Flutter Development Intermediate',
                'Android Architecture Intermediate',
                'Python Programming Intermediate'
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 group hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Checkmark icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 dark:shadow-blue-400/30 group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;