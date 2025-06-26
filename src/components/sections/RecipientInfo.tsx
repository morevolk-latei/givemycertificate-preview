import React from 'react';

interface RecipientInfoProps {
  course?: {
    title: string;
  };
  recipient?: {
    name: string;
    image?: string;
  };
}

const RecipientInfo: React.FC<RecipientInfoProps> = ({ course, recipient }) => {
  if (!course?.title && !recipient?.name) return null;

  return (
    <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <div>
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
      {recipient?.image && (
        <img
          src={recipient.image}
          alt={recipient.name || 'Recipient'}
          className="w-32 h-32 object-cover rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
        />
      )}
    </div>
  );
};

export default RecipientInfo; 