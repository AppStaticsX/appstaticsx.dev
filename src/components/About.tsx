import React from 'react';
import { Code, Smartphone, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Smartphone, label: 'Mobile Apps', value: '12+' },
    { icon: Users, label: 'Happy Clients', value: '10+' },
    { icon: Award, label: 'Years Experience', value: '3+' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 rounded-full shadow-lg shadow-blue-500/50 dark:shadow-blue-400/50 animate-glow"></div>
            </div>

            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p className="animate-fade-in animation-delay-200">
                I'm a passionate mobile application developer with extensive experience 
                in creating innovative Android and iOS applications. My journey in mobile 
                development has been driven by a love for crafting user-centric solutions 
                that make a real impact.
              </p>
              
              <p className="animate-fade-in animation-delay-400">
                With expertise in Java, Flutter, Kotlin, and Python, I specialize in building 
                cross-platform applications that deliver exceptional performance and 
                user experience. I've successfully completed 15 projects, ranging from 
                mobile apps to Python-based solutions.
              </p>

              <p className="animate-fade-in animation-delay-600">
                When I'm not coding, I enjoy contributing to open-source projects, 
                mentoring aspiring developers, and staying updated with the latest 
                trends in mobile technology and Python development.
              </p>
            </div>

        
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up animation-delay-800">
              <div className="space-y-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
                <h4 className="font-semibold text-gray-900 dark:text-white">Frontend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Flutter, React Native, Android XML</p>
              </div>
              <div className="space-y-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
                <h4 className="font-semibold text-gray-900 dark:text-white">Backend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Java, Kotlin, Python, Firebase</p>
              </div>
              <div className="space-y-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
                <h4 className="font-semibold text-gray-900 dark:text-white">Platforms</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Android, iOS, Cross-platform</p>
              </div>
              <div className="space-y-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
                <h4 className="font-semibold text-gray-900 dark:text-white">Tools</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Android Studio, Xcode, VS Code</p>
              </div>
            </div>
          </div>

        
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 text-center group border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/30 dark:shadow-blue-400/30 animate-glow-pulse">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;