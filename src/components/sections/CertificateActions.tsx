import React from 'react';
import { FaDownload, FaLinkedin, FaShareAlt } from 'react-icons/fa';

interface ShareLinks {
  linkedIn?: string;
  direct?: string;
  download?: string;
}

interface CertificateActionsProps {
  shareLinks?: ShareLinks;
}

const CertificateActions: React.FC<CertificateActionsProps> = ({ shareLinks }) => {
  if (!shareLinks) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {shareLinks.download && (
        <button className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl shadow-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:-translate-y-1">
          <FaDownload className="mr-3" />
          Download PDF
        </button>
      )}
      {shareLinks.linkedIn && (
        <button className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl shadow-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 transform hover:-translate-y-1">
          <FaLinkedin className="mr-3" />
          Share on LinkedIn
        </button>
      )}
      {shareLinks.direct && (
        <button className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl shadow-md bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-300 transform hover:-translate-y-1">
          <FaShareAlt className="mr-3" />
          Share Certificate
        </button>
      )}
    </div>
  );
};

export default CertificateActions; 