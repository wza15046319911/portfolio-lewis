import { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import myAvatar from '../../assets/avatar.jpg'

export const HeroSection: FC = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Lewis👋
          </h1>
          <p className="text-xl text-gray-600">
            Software engineer. I love building things and helping people. University Tutor.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Avatar className="w-32 h-32">
            <AvatarImage src={myAvatar} />
            <AvatarFallback>LW</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};