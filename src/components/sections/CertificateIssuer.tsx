import React from 'react';
import { FaCheckCircle, FaGraduationCap } from 'react-icons/fa';

interface CertificateIssuerProps {
  issuer?: {
    name: string;
    logo?: string;
  };
}

const CertificateIssuer: React.FC<CertificateIssuerProps> = ({ issuer }) => {
  if (!issuer) return null;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
          <FaGraduationCap className="text-2xl text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Issued by</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">{issuer.name}</p>
        </div>
      </div>
      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-100 border border-green-200 dark:border-green-800">
        <FaCheckCircle className="mr-2 text-green-600 dark:text-green-400" /> Verified Credential
      </span>
    </div>
  );
};

export default CertificateIssuer; 