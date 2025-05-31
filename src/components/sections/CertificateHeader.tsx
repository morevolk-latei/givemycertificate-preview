import React from 'react';
import { FaCertificate } from 'react-icons/fa';

interface CertificateHeaderProps {
  header?: {
    title: string;
    subtitle: string;
  };
}

const CertificateHeader: React.FC<CertificateHeaderProps> = ({ header }) => {
  if (!header) return null;

  return (
    <div className="text-center mb-16 relative">
      <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-indigo-100 dark:bg-indigo-900 opacity-20 blur-xl"></div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-purple-100 dark:bg-purple-900 opacity-20 blur-xl"></div>

      <div className="relative inline-flex items-center justify-center mb-6">
        <div className="absolute w-24 h-24 bg-indigo-500 dark:bg-indigo-600 rounded-full opacity-10 animate-pulse"></div>
        <FaCertificate className="text-6xl text-indigo-600 dark:text-indigo-400 z-10" />
      </div>

      <h1 className="text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl tracking-tight bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent mb-4">
        {header.title}
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {header.subtitle}
      </p>
    </div>
  );
};

export default CertificateHeader; 