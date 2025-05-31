import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { certificatePageData } from '../data/certificateData';
import type { CertificatePageData } from '../types/certificate';
import DateInformation from '../components/sections/DateInformation';
import SkillsAcquired from '../components/sections/SkillsAcquired';
import CourseDescription from '../components/sections/CourseDescription';
import CertificateHeader from '../components/sections/CertificateHeader';
import CertificateImage from '../components/sections/CertificateImage';
import CertificateActions from '../components/sections/CertificateActions';
import CertificateIssuer from '../components/sections/CertificateIssuer';
import RecipientInfo from '../components/sections/RecipientInfo';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [pageData, setPageData] = useState<CertificatePageData>(certificatePageData);

  // In future, you can fetch data here
  useEffect(() => {
    // Example of how you would fetch data:
    // const fetchData = async () => {
    //   const response = await fetch('/api/certificate/[id]');
    //   const data = await response.json();
    //   setPageData(data);
    // };
    // fetchData();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const { header, certificate } = pageData;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CertificateHeader header={header} />

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-l-8 border-indigo-600 dark:border-indigo-500 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 dark:bg-indigo-700 opacity-5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 dark:bg-purple-700 opacity-5 rounded-tr-full"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <CertificateImage
                image={certificate.media?.certificateImage}
                title={certificate.course?.title}
              />

              <div className="lg:col-span-12 p-8 lg:p-10 relative">
                <CertificateIssuer issuer={certificate.issuer} />
                <RecipientInfo course={certificate.course} recipient={certificate.recipient} />
                <DateInformation dates={certificate.dates} />
                <CourseDescription description={certificate.course?.description} />
                <SkillsAcquired skills={certificate.skills} />
                <CertificateActions shareLinks={certificate.media?.shareLinks} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;