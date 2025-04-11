import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  FaPython, FaJava, FaReact, FaAws, FaDocker, FaGitAlt, FaDatabase
} from 'react-icons/fa';
import { 
  SiJavascript, SiMysql, SiPostgresql, SiApacheairflow, 
  SiScikitlearn, SiSpringboot, SiFlask, SiTailwindcss,
  SiIntellijidea, SiPostman, SiGithub
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      items: [
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'SQL', icon: FaDatabase },
      ]
    },
    {
      title: "Databases & Cloud",
      items: [
        { name: 'MySQL', icon: SiMysql },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'AWS', icon: FaAws },
      ]
    },
    {
      title: "DevOps & Data Engineering",
      items: [
        { name: 'Docker', icon: FaDocker },
        { name: 'Git', icon: FaGitAlt },
        { name: 'Airflow', icon: SiApacheairflow },
        { name: 'ETL', icon: SiApacheairflow },
      ]
    }
  ];

  const frameworks = [
    { name: 'Flask', icon: SiFlask },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'React.js', icon: FaReact },
    { name: 'Tailwind', icon: SiTailwindcss },
  ];

  const tools = [
    'VS Code', 'IntelliJ IDEA', 'Postman', 'Git', 'GitHub',
    'AWS CLI', 'AWS Bedrock', 'Docker', 'PostgreSQL', 'Excel'
  ];

  const softSkills = [
    'Problem-Solving & Analytical Thinking',
    'Team Collaboration',
    'Creativity & Innovation',
    'Adaptability',
    'Technical Communication'
  ];

  return (
    <section id="skills" className="section-padding bg-background/95">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">My Skills</span>
          </h3>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Technical Skills Grid */}
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <div key={category.title} className="glass-card rounded-xl p-6 interactive-card">
                <h4 className="text-xl font-semibold mb-5">{category.title}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                  {category.items.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="flex flex-col items-center text-center transition-transform hover:scale-110"
                    >
                      <skill.icon className="w-14 h-14 mb-2 text-accent hover:text-primary transition-colors" />
                      <span className="text-foreground/80 text-base font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Other Skills Container */}
          <div className="space-y-6">
            {/* Tools & Technologies */}
            <div className="glass-card rounded-xl p-6 interactive-card">
              <h4 className="text-xl font-semibold mb-5">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((item) => (
                  <Badge 
                    key={item} 
                    className="bg-accent/20 hover:bg-accent/30 text-foreground border border-accent/30 text-base px-3 py-1.5"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card rounded-xl p-6 interactive-card">
              <h4 className="text-xl font-semibold mb-5">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((item) => (
                  <Badge 
                    key={item} 
                    className="bg-secondary/20 hover:bg-secondary/30 text-foreground border border-secondary/30 text-base px-3 py-1.5"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="glass-card rounded-xl p-6 interactive-card">
              <h4 className="text-xl font-semibold mb-5">Frameworks</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {frameworks.map((framework) => (
                  <div 
                    key={framework.name} 
                    className="flex flex-col items-center text-center transition-transform hover:scale-110"
                  >
                    <framework.icon className="w-14 h-14 mb-2 text-accent hover:text-primary transition-colors" />
                    <span className="text-foreground/80 text-base font-medium">{framework.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
