import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Skill } from '../../types/certificate';

interface SkillsAcquiredProps {
  skills?: Skill[];
}

const SkillsAcquired: React.FC<SkillsAcquiredProps> = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
          <FiExternalLink className="text-indigo-600 dark:text-indigo-400" />
        </span>
        Skills Acquired
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 text-indigo-800 dark:text-indigo-200 text-sm font-medium border border-indigo-200 dark:border-indigo-800 flex items-center"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 mr-2"></span>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsAcquired; 