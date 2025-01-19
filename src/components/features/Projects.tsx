import { FC } from 'react';
import { SingleProject } from './SingleProject';


export const Projects: FC = () => {
    return (
        <section className="py-4 px-4 text-left">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <div className="flex flex-wrap gap-4 justify-between">
                <SingleProject />
                <SingleProject />
                <SingleProject />
                <SingleProject />
            </div>
        </section>
    )
}