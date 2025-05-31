import React from 'react';

interface RecipientInfoProps {
  course?: {
    title: string;
  };
  recipient?: {
    name: string;
  };
}

const RecipientInfo: React.FC<RecipientInfoProps> = ({ course, recipient }) => {
  if (!course?.title && !recipient?.name) return null;

  return (
    <div className="mb-8">
      {course?.title && (
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
          {course.title}
        </h2>
      )}
      {recipient?.name && (
        <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
          Awarded to <span className="font-bold text-indigo-600 dark:text-indigo-400">{recipient.name}</span>
        </p>
      )}
    </div>
  );
};

export default RecipientInfo; 