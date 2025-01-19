import { FC } from 'react';
import { Badge } from "@/components/ui/badge"
import { Skill } from '@/types';

const skills: Skill[] = [
    // Languages
    { id: 1, name: 'Python', category: 'languages' },
    { id: 2, name: 'JavaScript', category: 'frontend' },
    
    // Web Tech
    { id: 3, name: 'Jest', category: 'webtech' },
    { id: 4, name: 'RESTful API', category: 'webtech' },
    { id: 5, name: 'Redux', category: 'webtech' },
    
    // Frontend
    { id: 6, name: 'HTML5', category: 'frontend' },
    { id: 7, name: 'CSS3', category: 'frontend' },
    { id: 9, name: 'React.js', category: 'frontend' },
    { id: 10, name: 'React Native', category: 'frontend' },
    { id: 11, name: 'Node.js', category: 'frontend' },
    { id: 12, name: 'TypeScript', category: 'frontend' },
    { id: 14, name: 'Tailwind CSS', category: 'frontend' },
    { id: 15, name: 'Next.js', category: 'frontend' },
    
    // Database
    { id: 17, name: 'MySQL', category: 'database' },
    { id: 18, name: 'PostgreSQL', category: 'database' },
    { id: 19, name: 'MongoDB', category: 'database' },
    
    // Cloud
    { id: 20, name: 'Docker', category: 'cloud' },
    { id: 21, name: 'CI/CD', category: 'cloud' },
    { id: 23, name: 'AWS', category: 'cloud' },
    
    // Tools
    { id: 24, name: 'Expo', category: 'tools' },
    { id: 25, name: 'Git', category: 'tools' },
    { id: 26, name: 'Jira', category: 'tools' },
    { id: 27, name: 'Atlassian', category: 'tools' },
    { id: 28, name: 'Figma', category: 'tools' },
    { id: 29, name: 'Postman', category: 'tools' },
    { id: 32, name: 'Redis', category: 'database' },
    { id: 33, name: 'Jenkins', category: 'tools' },
    { id: 34, name: 'Golang', category: 'languages' },
];

export const Skills: FC = () => {
    const groupedSkills = skills.reduce((acc, skill) => {
        const category = skill.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Skills</h2>
                <div className="grid gap-8">
                    {Object.entries(groupedSkills).map(([category, skills]) => (
                        <div key={category} className="space-y-3">
                            <h3 className="text-xl font-semibold">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <Badge 
                                        key={skill.id} 
                                        className="text-sm py-1 px-3"
                                    >
                                        {skill.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};