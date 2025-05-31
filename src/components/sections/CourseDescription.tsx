import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

interface CourseDescriptionProps {
  description?: string;
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({ description }) => {
  if (!description) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
          <FaGraduationCap className="text-indigo-600 dark:text-indigo-400" />
        </span>
        About the Course
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CourseDescription; 