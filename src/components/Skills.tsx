import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Android (Java)', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Android (Kotlin)', level: 88, color: 'from-purple-500 to-purple-600' },
        { name: 'iOS Development', level: 75, color: 'from-gray-500 to-gray-600' },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90, color: 'from-orange-500 to-orange-600' },
        { name: 'Kotlin', level: 85, color: 'from-purple-500 to-purple-600' },
        { name: 'Dart', level: 88, color: 'from-blue-500 to-blue-600' },
        { name: 'Python', level: 82, color: 'from-yellow-500 to-yellow-600' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Android Studio', level: 92, color: 'from-green-500 to-green-600' },
        { name: 'VS Code', level: 88, color: 'from-blue-500 to-blue-600' },
        { name: 'Firebase', level: 85, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Git', level: 90, color: 'from-gray-500 to-gray-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 rounded-full mx-auto mb-6 shadow-lg shadow-blue-500/50 dark:shadow-blue-400/50 animate-glow"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing mobile applications and Python solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden shadow-inner">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg animate-glow-pulse`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `slideIn 1s ease-out ${skillIndex * 0.1}s both, glow-pulse 2s ease-in-out infinite alternate`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced certifications */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1000">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Endpoint Security Certified',
              'Flutter Development Expert',
              'Android Architecture Expert',
              'Python Programming Expert'
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 group hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 dark:shadow-blue-400/30 group-hover:scale-110 transition-all duration-300 animate-glow-pulse">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;