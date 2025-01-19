import { FC } from 'react';
import type { WorkExperience as WorkExperienceType } from '../../types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const experiences: WorkExperienceType[] = [
  {
    id: 1,
    company: 'Anystay',
    role: 'Full Stack Developer',
    location: 'Brisbane, Australia (Remote)',
    startDate: '2023-12',
    endDate: '2024-04',
    description: 'Online innovative e-commerce platform for short-term and long-term stays, including hosts and guests system, sales, member portal and membership management.',
    logoUrl: '/anystay-work.jpeg',
    responsibilities: [
      'Developed and maintained an e-commerce platform using React.js, Node.js, and AWS, including frontend development, API integration, automated testing, and CI/CD deployment'
    ]
  },
  {
    id: 2,
    company: 'Bytedance',
    role: 'Full Stack Developer',
    location: 'Beijing, China (On Site)',
    startDate: '2023-07',
    endDate: '2023-12',
    description: 'Leading tech company that leverages data and AI to innovate social media platforms and enhance user engagement through content discovery.',
    logoUrl: '/tiktok-work.jpeg',
    responsibilities: [
      'Built web middleware using Next.js and Node.js, optimized system performance with Redis, and implemented automated testing and CI/CD workflows'
    ]
  },
  {
    id: 3,
    company: 'Kexing Easygo',
    role: 'Lead Full Stack Developer',
    location: 'Beijing, China (Remote)',
    startDate: '2020-11',
    endDate: '2022-11',
    description: 'Designing mobile applications for University of Queensland students that consolidates essential academic tools into a user-friendly platform for managing grades, deadlines, schedules, and course evaluations.',
    logoUrl: '/kexing-work.jpeg',
    responsibilities: [
      'Led development team in building mobile applications using React.js and Node.js, conducting code reviews and managing technical implementations'
    ]
  },
  {
    id: 4,
    company: 'Graviti',
    role: 'Full Stack Developer',
    location: 'Shanghai, China (Hybrid)',
    startDate: '2021-01',
    endDate: '2022-01',
    description: 'Graviti is a technology company dedicated to transforming AI development by providing next-generation tools for efficient dataset acquisition, storage, and processing, empowering industries with artificial intelligence.',
    logoUrl: '/graviti-work.jpeg',
    responsibilities: [
      'Developed full-stack applications using React.js and Golang, implemented distributed web crawling system, and maintained API Gateway infrastructure'
    ]
  },
  {
    id: 5,
    company: 'HD EDU',
    role: 'Full Stack Developer',
    location: 'Shenzhen, China (Hybrid)',
    startDate: '2018-11',
    endDate: '2020-11',
    description: 'HD EDU, is a leading platform, committed to providing a transformative customer experience for global university students in their academic studies, personal growth and career development.',
    logoUrl: '/hd-work.jpeg',
    responsibilities: [
      'Built and maintained educational platform using React.js and Node.js, including web scraping automation and comprehensive testing implementation'
    ]
  }
];

export const WorkExperience: FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-2">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={exp.logoUrl}
                  alt={exp.company}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex-1">
                <Accordion type="single" collapsible className="w-full [&>div]:border-none">
                  <AccordionItem value="responsibilities">
                    <AccordionTrigger className="text-left font-small p-4 bg-white">
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="font-semibold text-lg">{exp.company}</h3>
                        <p>{exp.role}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 bg-white">
                      <ul className="list-inside space-y-2 text-gray-700">
                        {exp.responsibilities.map((responsibility, index) => (
                          <li key={index} className="leading-relaxed">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="text-right text-gray-500">
                <p>{exp.startDate} - {exp.endDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};