import React, { useEffect } from 'react';
import { Skill } from '../types';
import { 
  Smartphone, 
  Globe, 
  Database, 
  Terminal,
  Server,
  Users
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const skills: Skill[] = [
  { name: 'Mobile Development', proficiency: 90, icon: 'Smartphone' },
  { name: 'Web Development', proficiency: 85, icon: 'Globe' },
  { name: 'Backend Development', proficiency: 80, icon: 'Server' },
  { name: 'Database Management', proficiency: 85, icon: 'Database' },
  { name: 'DevOps', proficiency: 75, icon: 'Terminal' },
  { name: 'Project Management', proficiency: 90, icon: 'Users' },
];

const IconComponent = ({ name }: { name: string }) => {
  const icons = {
    Smartphone,
    Globe,
    Database,
    Terminal,
    Server,
    Users,
  };
  const Icon = icons[name as keyof typeof icons];
  return <Icon className="w-8 h-8 text-blue-600" />;
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 150 });
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow transform hover:-translate-y-2"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <IconComponent name={skill.icon} />
                <h3 className="text-xl font-semibold ml-3">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{
                    width: 0,
                    animation: `fillBar ${skill.proficiency / 100 + 0.5}s forwards`,
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 mt-2 block text-right">
                {skill.proficiency}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fillBar {
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
