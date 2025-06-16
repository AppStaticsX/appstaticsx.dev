import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Smartphone, Code, Database, Zap, Apple } from 'lucide-react';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [showFloatingIcons, setShowFloatingIcons] = useState(false);
  const fullName = 'Anushka Umayanga';
  const typingSpeed = 150;

  useEffect(() => {
    // Detect if device is laptop/desktop for animations
    const checkDevice = () => {
      const hasHover = window.matchMedia('(hover: hover)').matches;
      const isLargeScreen = window.innerWidth >= 1024;
      setIsLaptop(hasHover && isLargeScreen);
      
      // Show floating icons only when screen width >= 1064
      setShowFloatingIcons(window.innerWidth >= 1064);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const handleScroll = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetInTouch = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const cvUrl = 'https://github.com/AppStaticsX/My-Portfolio/blob/main/src/documents/CV_Resume.pdf?raw=true';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Anushka_Umayanga_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Background elements - simplified for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse shadow-2xl shadow-blue-500/50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/20 dark:bg-teal-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse animation-delay-2000 shadow-2xl shadow-teal-500/50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-pulse animation-delay-4000 shadow-2xl shadow-purple-500/30"></div>
        

        {showFloatingIcons && (
          <>
            <div className={`absolute top-16 left-12 transform rotate-12 ${isLaptop ? 'animate-float animation-delay-1000' : ''}`}>
              <div className="w-12 h-12 bg-blue-500/20 dark:bg-blue-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>

            <div className={`absolute top-32 right-20 transform -rotate-45 ${isLaptop ? 'animate-float animation-delay-2000' : ''}`}>
              <div className="w-16 h-16 bg-orange-500/20 dark:bg-orange-400/30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg shadow-orange-500/30 hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
            </div>

            <div className={`absolute top-1/4 left-16 transform rotate-45 ${isLaptop ? 'animate-float animation-delay-3000' : ''}`}>
              <div className="w-10 h-10 bg-red-500/20 dark:bg-red-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg shadow-red-500/30 hover:scale-110 transition-transform duration-300">
                <Database className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
            </div>

            <div className={`absolute top-1/3 right-12 transform -rotate-12 ${isLaptop ? 'animate-float animation-delay-1500' : ''}`}>
              <div className="w-14 h-14 bg-green-500/20 dark:bg-green-400/30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
            </div>

            <div className={`absolute bottom-1/3 left-20 transform rotate-30 ${isLaptop ? 'animate-float animation-delay-2500' : ''}`}>
              <div className="w-12 h-12 bg-purple-500/20 dark:bg-purple-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>

            <div className={`absolute bottom-1/4 right-24 transform -rotate-30 ${isLaptop ? 'animate-float animation-delay-4000' : ''}`}>
              <div className="w-11 h-11 bg-gray-500/20 dark:bg-gray-400/30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg shadow-gray-500/30 hover:scale-110 transition-transform duration-300">
                <Apple className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </div>
            </div>

            <div className={`absolute bottom-1/2 left-1/4 transform rotate-15 ${isLaptop ? 'animate-float animation-delay-3500' : ''}`}>
              <div className="w-13 h-13 bg-indigo-500/20 dark:bg-indigo-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg shadow-indigo-500/30 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
                  <path fill="currentColor" d="M12.01 2C6.5 2 2.02 6.48 2.02 12s4.48 10 9.99 10c5.51 0 9.99-4.48 9.99-10s-4.48-10-9.99-10zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
            </div>

            <div className={`absolute top-2/3 right-32 transform rotate-60 ${isLaptop ? 'animate-float animation-delay-1800' : ''}`}>
              <div className="w-9 h-9 bg-cyan-500/20 dark:bg-cyan-400/30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-cyan-600 dark:text-cyan-400">
                  <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </>
        )}

        <div className={`absolute top-20 left-20 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full shadow-lg shadow-blue-500/50 ${isLaptop ? 'animate-bounce animation-delay-1000' : ''}`}></div>
        <div className={`absolute top-40 right-32 w-3 h-3 bg-teal-400 dark:bg-teal-300 rounded-full shadow-lg shadow-teal-500/50 ${isLaptop ? 'animate-bounce animation-delay-2000' : ''}`}></div>
        <div className={`absolute bottom-32 left-32 w-2 h-2 bg-purple-400 dark:bg-purple-300 rounded-full shadow-lg shadow-purple-500/50 ${isLaptop ? 'animate-bounce animation-delay-3000' : ''}`}></div>
        <div className={`absolute bottom-20 right-20 w-1 h-1 bg-pink-400 dark:bg-pink-300 rounded-full shadow-lg shadow-pink-500/50 ${isLaptop ? 'animate-bounce animation-delay-4000' : ''}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 dark:shadow-blue-400/50 transform hover:scale-110 transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/70 dark:hover:shadow-blue-400/70">
            <img
              src="https://github.com/AppStaticsX/My-Portfolio/blob/main/src/images/profile_new.jpg?raw=true"
              alt="Anushka Umayanga"
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-slide-in-left">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent drop-shadow-lg relative">
                {displayedName}
                {!isTypingComplete && (
                  <span className="animate-pulse text-blue-600 dark:text-blue-400 ml-1">|</span>
                )}
              </span>
            </h1>
            <h2 className={`text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium transition-all duration-500 ${
              isTypingComplete ? 'animate-slide-in-right opacity-100' : 'opacity-0'
            }`}>
              Mobile Application Developer
            </h2>
          </div>

          <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-500 ${
            isTypingComplete ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}>
            Passionate mobile developer specializing in Android & iOS applications. 
            Expert in Java, Flutter, Kotlin, and Python with a focus on creating beautiful, 
            performant mobile experiences.
          </p>
          <div className={`flex flex-wrap justify-center gap-3 max-w-md mx-auto transition-all duration-500 ${
            isTypingComplete ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '500ms' }}>
            {['Java', 'Flutter', 'Kotlin', 'Python', 'Android', 'iOS'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

        
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 ${
            isTypingComplete ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '1000ms' }}>
            <button
              onClick={handleGetInTouch}
              className="group bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-500/30 dark:shadow-blue-400/30 hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-blue-400/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} className="group-hover:animate-bounce" />
                Get In Touch
            </button>
            <button 
              onClick={handleDownloadCV}
              className="group bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium shadow-lg shadow-gray-500/20 dark:shadow-gray-700/30 hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-gray-600/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download CV
            </button>
          </div>

          
          <button
            onClick={handleScroll}
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 animate-bounce hover:scale-110 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 backdrop-blur-sm ${
              isTypingComplete ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1500ms' }}
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;