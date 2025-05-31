import React from 'react';

interface CertificateImageProps {
  image?: string;
  title?: string;
}

const CertificateImage: React.FC<CertificateImageProps> = ({ image, title }) => {
  if (!image) return null;

  return (
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
            src={image}
            alt={`${title || 'Certificate'}`}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default CertificateImage; 