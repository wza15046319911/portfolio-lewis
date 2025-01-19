import { FC } from 'react';
import type { Education as EducationType } from '../../types';

const educations: EducationType[] = [
  {
    id: '1',
    university: 'University of Melbourne',
    degree: 'Master of Information Technology (Artificial Intelligence)',
    startDate: '2022',
    endDate: '2023',
    location: 'Melbourne, Australia',
    logoUrl: '/unimelb-study.jpeg'
  },
  {
    id: '2',
    university: 'University of Queensland',
    degree: 'Bachelor of Engineering Honors (Electrical Engineering)',
    startDate: '2017',
    endDate: '2021',
    location: 'Brisbane, Australia',
    logoUrl: '/uq-study.jpeg'
  }
];

export const Education: FC = () => {
  return (
    <section className="p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {educations.map((edu) => (
            <div key={edu.id} className="flex items-center gap-4 p-2 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={edu.logoUrl}
                  alt={edu.university}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{edu.university}</h3>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-gray-500">{edu.location}</p>
              </div>
              <div className="text-right text-gray-500">
                <p>{edu.startDate} - {edu.endDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};