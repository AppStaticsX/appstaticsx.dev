import React from 'react';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AgMe - Harvest Management App',
      description: 'A comprehensive harvest management application built with Android Java, featuring crop tracking, yield recording, storage logs, and seasonal analytics for efficient farm operations.',
      image: 'https://cdn.dribbble.com/userupload/17759402/file/original-05cefd99773d6017c6b47726b55e4d24.png?resize=1024x768&vertical=center',
      technologies: ['Java', 'Firebase', 'Native-Android'],
      liveUrl: 'https://github.com/AppStaticsX/AgMe',
      githubUrl: 'https://github.com/AppStaticsX/AgMe',
      featured: true,
    },
    {
      title: 'HabiTap - Habit Tracker App',
      description: 'A sleek habit tracker app built with Flutter, featuring daily habit logging, progress visualization, reminders, and goal setting to help users build and maintain positive routines.',
      image: 'https://i.pinimg.com/originals/58/2e/95/582e9585b4ebd05c78be0f5d1be13800.jpg',
      technologies: ['Flutter', 'Android', 'Hive DB', 'Material Design'],
      liveUrl: 'https://github.com/AppStaticsX/HabiTap',
      githubUrl: 'https://github.com/AppStaticsX/HabiTap',
      featured: true,
    },
    {
      title: 'Minimal Music Player',
      description: 'A minimalistic music player built with Android Java, featuring local audio playback, clean UI, basic controls, and playlist management for a smooth listening experience.',
      image: 'https://cdn.dribbble.com/users/2153376/screenshots/15259742/radio_ava_mrfarahzad_4x.jpg',
      technologies: ['Java', 'Android', 'Firebase'],
      liveUrl: 'https://github.com/AppStaticsX/Simple-Music-Player',
      githubUrl: 'https://github.com/AppStaticsX/Simple-Music-Player',
      featured: true,
    },
    {
      title: 'Apk Editor Application for PC',
      description: 'A powerful APK editor application built with Python, featuring APK decompiling, resource modification, manifest editing, and recompiling capabilities for app customization and analysis.',
      image: 'https://www.techadvisor.com/wp-content/uploads/2024/06/androidLogo-1.jpg?quality=50&strip=all',
      technologies: ['Python', 'TKinter'],
      liveUrl: 'https://github.com/AppStaticsX/APK-Editing-Tools',
      githubUrl: 'https://github.com/AppStaticsX/APK-Editing-Tools',
      featured: false,
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Built natively for Android using Java.',
      image: 'https://design4users.com/wp-content/uploads/2017/08/weather-application-design.jpg',
      technologies: ['Kotlin', 'Android', 'OpenWeather', 'Google Maps'],
      liveUrl: 'https://github.com/AppStaticsX/Weather-App',
      githubUrl: 'https://github.com/AppStaticsX/Weather-App',
      featured: false,
    },
    {
      title: 'Foddie Delight - Food Delivery App',
      description: 'A feature-rich food delivery app built with Flutter, offering restaurant listings, real-time order tracking, user authentication, cart management, and secure payment integration for a seamless ordering experience.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0eef60160340947.63b2f9cfb67eb.jpg',
      technologies: ['Android', 'Firebase', 'Selenium', 'MongoDB'],
      liveUrl: 'https://github.com/AppStaticsX/Foodie-Delight/tree/main/Desktop/FoodieDelight',
      githubUrl: 'https://github.com/AppStaticsX/Foodie-Delight/tree/main/Desktop/FoodieDelight',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 rounded-full mx-auto mb-6 shadow-lg shadow-blue-500/50 dark:shadow-blue-400/50 animate-glow"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the mobile applications and Python projects I've built using various technologies and frameworks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg shadow-blue-500/30 dark:shadow-blue-400/30 animate-glow-pulse">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-all duration-300 hover:scale-105"
                  >
                    <Smartphone size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-sm transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      
        <div className="animate-fade-in-up animation-delay-1000">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Other Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                    {project.description.substring(0, 100)}...
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium border border-gray-200/50 dark:border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium border border-gray-200/50 dark:border-gray-600/50">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-xs font-medium transition-colors duration-300"
                    >
                      <ExternalLink size={12} />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-xs font-medium transition-colors duration-300"
                    >
                      <Github size={12} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;