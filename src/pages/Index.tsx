import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaShareAlt, FaDownload, FaCheckCircle, FaCalendarAlt, FaGraduationCap, FaAward, FaCertificate, FaLink, FaSun, FaMoon } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const certificateDetails = {
    recipient: 'Sahil Mor',
    course: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    issuedOn: '06-Dec-2024',
    expiresOn: 'N/A',
    duration: '01-May-2025 to 20-May-2025',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    about: 'This course offers a practical approach to becoming a successful Frontend Developer. Participants gain hands-on experience with tools and techniques to bridge business challenges and technical solutions effectively.',
    verifier: 'Mayank Kumar',
    verifierTitle: 'Co-founder & MD, upGrad',
    issuerPlatform: 'GiveMyCertificate',
    certificateImage: '/download.png',
    linkedInUrl: '#',
    shareUrl: '#',
    downloadUrl: '#',
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      {/* Dark Mode Toggle Navigation */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`relative w-16 h-8 rounded-full p-1 transition-all duration-500 focus:outline-none ${darkMode ? 'bg-indigo-900' : 'bg-yellow-400'}`}
          aria-label="Toggle dark mode"
        >
          {/* Track */}
          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${darkMode ? 'bg-indigo-900/30' : 'bg-yellow-400/30'}`}></div>
          
          {/* Thumb */}
          <div
            className={`relative w-6 h-6 rounded-full shadow-lg transform transition-transform duration-500 flex items-center justify-center ${
              darkMode ? 'translate-x-8 bg-indigo-600' : 'translate-x-0 bg-yellow-300'
            }`}
          >
            {darkMode ? (
              <FaMoon className="text-indigo-200 text-sm" />
            ) : (
              <FaSun className="text-yellow-600 text-sm" />
            )}
          </div>
          
          {/* Stars (visible in dark mode) */}
          {darkMode && (
            <>
              <div className="absolute top-1 left-2 w-1 h-1 rounded-full bg-white opacity-0 animate-twinkle" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-3 left-6 w-1 h-1 rounded-full bg-white opacity-0 animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-2 left-4 w-1 h-1 rounded-full bg-white opacity-0 animate-twinkle" style={{ animationDelay: '0.8s' }}></div>
            </>
          )}
          
          {/* Sun rays (visible in light mode) */}
          {!darkMode && (
            <>
              <div className="absolute -top-1 -left-1 w-10 h-10 opacity-0 transition-opacity duration-500">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-3 bg-yellow-300 rounded-full"
                    style={{
                      transform: `rotate(${i * 45}deg) translateY(-8px)`,
                      transformOrigin: 'bottom center',
                    }}
                  ></div>
                ))}
              </div>
            </>
          )}
        </button>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Premium Header with Decorative Elements */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-indigo-100 dark:bg-indigo-900 opacity-20 blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-purple-100 dark:bg-purple-900 opacity-20 blur-xl"></div>
          
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute w-24 h-24 bg-indigo-500 dark:bg-indigo-600 rounded-full opacity-10 animate-pulse"></div>
            <FaCertificate className="text-6xl text-indigo-600 dark:text-indigo-400 z-10" />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl tracking-tight bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent mb-4">
            Certificate of Achievement
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognizing excellence in professional development and skill mastery
          </p>
        </div>

        {/* Premium Certificate Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-l-8 border-indigo-600 dark:border-indigo-500 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 dark:bg-indigo-700 opacity-5 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 dark:bg-purple-700 opacity-5 rounded-tr-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Certificate Image Section */}
            <div className="lg:col-span-12 p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="premiumPattern" patternUnits="userSpaceOnUse" width="40" height="40">
                      <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="20" cy="20" r="2" fill="currentColor" />
                    </pattern>
                    <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <rect width="100" height="100" fill="url(#premiumPattern)" className="text-indigo-300 dark:text-indigo-900" />
                  <rect width="100" height="100" fill="url(#premiumGradient)" />
                </svg>
              </div>
              
              <div className="relative z-10 w-full max-w-xl">
                <div className="aspect-w-1 aspect-h-1.414 shadow-2xl rounded-xl overflow-hidden border-8 border-white dark:border-gray-700 transform rotate-0 hover:rotate-1 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 border-2 border-indigo-500/20 dark:border-indigo-400/20 rounded-lg scale-105 group-hover:scale-110 transition-transform duration-500"></div>
                  <img
                    src={certificateDetails.certificateImage}
                    alt={`${certificateDetails.course} Certificate`}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                  <button className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-indigo-900/30">
                    <FaDownload className="text-indigo-600 dark:text-indigo-400" />
                  </button>
                  <button className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                    <FaLinkedin className="text-blue-600 dark:text-blue-400" />
                  </button>
                  <button className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-50 dark:hover:bg-green-900/30">
                    <FaShareAlt className="text-green-600 dark:text-green-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate Details Section */}
            <div className="lg:col-span-12 p-8 lg:p-10 relative">
              {/* Issuer and Verification Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
                    <FaGraduationCap className="text-2xl text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Issued by</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{certificateDetails.issuer}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-100 border border-green-200 dark:border-green-800">
                  <FaCheckCircle className="mr-2 text-green-600 dark:text-green-400" /> Verified Credential
                </span>
              </div>

              {/* Course Title and Recipient */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                  {certificateDetails.course}
                </h2>
                <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
                  Awarded to <span className="font-bold text-indigo-600 dark:text-indigo-400">{certificateDetails.recipient}</span>
                </p>
              </div>

              {/* Date Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl flex items-start">
                  <FaCalendarAlt className="text-xl text-indigo-500 dark:text-indigo-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Issued On</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">{certificateDetails.issuedOn}</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl flex items-start">
                  <FaCalendarAlt className="text-xl text-gray-500 dark:text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Expires On</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">{certificateDetails.expiresOn}</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl flex items-start">
                  <FaAward className="text-xl text-purple-500 dark:text-purple-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">{certificateDetails.duration}</p>
                  </div>
                </div>
              </div>

              {/* Course Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
                    <FaGraduationCap className="text-indigo-600 dark:text-indigo-400" />
                  </span>
                  About the Course
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {certificateDetails.about}
                </p>
              </div>

              {/* Skills Acquired */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
                    <FiExternalLink className="text-indigo-600 dark:text-indigo-400" />
                  </span>
                  Skills Acquired
                </h3>
                <div className="flex flex-wrap gap-3">
                  {certificateDetails.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 text-indigo-800 dark:text-indigo-200 text-sm font-medium border border-indigo-200 dark:border-indigo-800 flex items-center"
                    >
                      <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 mr-2"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl shadow-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:-translate-y-1">
                  <FaDownload className="mr-3" />
                  Download PDF
                </button>
                <button className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl shadow-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300">
                  <FaLinkedin className="mr-3 text-blue-600 dark:text-blue-400" />
                  Share on LinkedIn
                </button>
                <button className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl shadow-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300">
                  <FaLink className="mr-3 text-indigo-600 dark:text-indigo-400" />
                  Copy Link
                </button>
              </div>
            </div>
          </div>

          {/* Verification Footer */}
          <div className="bg-gray-50 dark:bg-gray-900 px-8 py-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Verified by <span className="font-semibold text-gray-800 dark:text-white">{certificateDetails.verifier}</span> ({certificateDetails.verifierTitle})
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Issued via <a href="#" className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">{certificateDetails.issuerPlatform}</a>
              </p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>Certificate ID: <span className="font-mono text-gray-800 dark:text-gray-200">CRT-12345-ABCDE</span></p>
              <p>© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for twinkle animation */}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(0.5); }
        }
        .animate-twinkle {
          animation: twinkle 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;