export interface WorkExperience {
    id: number;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    logoUrl: string;
    responsibilities: string[];
    location: string;
}

export interface Skill {
    id: number;
    name: string;
    category: 'languages' | 'webtech' | 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'other';
}

export interface Project {
    id: string;
    name: string;
    description: string;
    thumbnailUrl: string;
    startDate: string;
    endDate: string;
    technologies: string[];
    websiteUrl: string;
}

export interface Education {
    id: string;
    university: string;
    degree: string;
    startDate: string;
    endDate: string;
    location: string;
    logoUrl: string;
}
