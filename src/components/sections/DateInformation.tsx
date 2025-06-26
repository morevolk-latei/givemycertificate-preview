import React from 'react';
import { FaCalendarAlt, FaAward } from 'react-icons/fa';

interface DateInformationProps {
  dates: {
    issuedOn?: string;
    expiresOn?: string;
    duration?: string;
  };
}

const DateInformation: React.FC<DateInformationProps> = ({ dates }) => {
  if (!dates.issuedOn && !dates.expiresOn && !dates.duration) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {dates.issuedOn && (
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl flex items-start">
          <FaCalendarAlt className="text-xl text-indigo-500 dark:text-indigo-400 mt-1 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Issued On</p>
            <p className="text-base font-semibold text-gray-900 dark:text-white">{dates.issuedOn}</p>
          </div>
        </div>
      )}
      {dates.expiresOn && (
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl flex items-start">
          <FaCalendarAlt className="text-xl text-gray-500 dark:text-gray-400 mt-1 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Expires On</p>
            <p className="text-base font-semibold text-gray-900 dark:text-white">{dates.expiresOn}</p>
          </div>
        </div>
      )}
      {dates.duration && (
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl flex items-start">
          <FaAward className="text-xl text-purple-500 dark:text-purple-400 mt-1 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</p>
            <p className="text-base font-semibold text-gray-900 dark:text-white">{dates.duration}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateInformation; 