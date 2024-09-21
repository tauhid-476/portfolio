import React from 'react';
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiNodedotjs, SiRedux } from 'react-icons/si';


interface SkillProps {
  Icon: React.ComponentType<{ className?: string }>;
  name: string
  category: string
  color: string
}
const Skill: React.FC<SkillProps> = ({ Icon, name, category,color }) => (
  <div className="p-4 rounded-lg  shadow-lg md:hover:shadow-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 md:border-none border border-gray-600">
    <Icon className={`text-4xl md:text-5xl   ${color}`} />
    <span className="text-white font-semibobold">{name}</span>
    <span className="text-purple-300 text-sm">{category}</span>
  </div>
);

const SkillCards = () => {
  const skills = [
    { Icon: SiTypescript, name: 'TypeScript', category: 'Frontend', color: 'text-[#3178c6]' },
    { Icon: SiReact, name: 'React', category: 'Frontend', color: 'text-[#61dafb]' }, 
    { Icon: SiNextdotjs, name: 'Next.js', category: 'Frontend', color: 'text-white' }, 
    { Icon: SiTailwindcss, name: 'Tailwind CSS', category: 'Frontend', color: 'text-[#06b6d4]' }, 
    { Icon: SiExpress, name: 'Express.js', category: 'Backend', color: 'text-white'},
    { Icon: SiMongodb, name: 'MongoDB', category: 'Database', color: 'text-[#47a248]' }, 
    { Icon: SiNodedotjs, name: 'Node.js', category: 'Backend', color: 'text-[#339933]' }, 
    { Icon: SiRedux, name: 'Redux Toolkit', category: 'Frontend', color: 'text-[#764abc]' }, 
  ];

  return (
    <section className="mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillCards;