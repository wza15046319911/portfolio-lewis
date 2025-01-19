import { FC } from 'react';

export const AboutSection: FC = () => {
  return (
    <section className="py-4 px-4 text-left">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Results-oriented and innovative software developer with over <strong>5</strong> years of experience 
          focused on both frontend and backend technologies. My technical expertise includes <strong>Python</strong>, 
          <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Typescript</strong>, MongoDB, 
          <strong>CI/CD</strong>, automated tests. My highlight is designing and deploying scalable, 
          high performance applications used by thousands of users. I am a good team player in Agile 
          environments, delivering projects on time.
        </p>
      </div>
    </section>
  );
};