import React from 'react';
import { CalendarDays, Briefcase, GraduationCap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: 'Data Science Intern',
      company: 'Futurense Technologies',
      period: 'June 2024 - Aug 2024',
      description: 'Led data-driven initiatives to optimize business processes and develop innovative healthcare solutions.',
      details: [
        {
          section: 'Data Analysis & Insights',
          content: 'Performed comprehensive exploratory data analysis (EDA) on 20,000+ data points from marketing campaigns and endorsements, extracting actionable insights that informed strategic decision-making.'
        },
        {
          section: 'Machine Learning Development',
          content: 'Developed and deployed a sophisticated machine learning model with 87% accuracy to predict capital investment requirements for achieving targeted business outcomes.'
        },
        {
          section: 'Healthcare Application Development',
          content: 'Designed and deployed a comprehensive medical web application featuring advanced functionalities including medicine booking, doctor consultation scheduling, and a diabetes prediction model with 85%+ precision.'
        }
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Web Development', 'AI/ML', 'Healthcare Tech'],
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Lovely Professional University, Punjab',
      period: '2022 - 2026',
      description: 'CGPA: 8.84',
    },
    {
      id: 2,
      degree: '12th with Science',
      institution: 'Narayana Junior College',
      period: '2019 - 2021',
      description: 'Percentage: 97.5%',
    },
    {
      id: 3,
      degree: '10th with Science',
      institution: 'Sri Chaitanya Techno School',
      period: '2018 - 2019',
      description: 'CGPA: 10',
    },
  ];

  const certifications = [
    {
      id: 1,
      name: 'Python for Data Science',
      issuer: 'Learnbay',
      date: 'Feb 2025',
    },
    {
      id: 2,
      name: 'Azure Data Scientist Associate',
      issuer: 'Microsoft',
      date: 'Dec 2024',
    },
    {
      id: 3,
      name: 'Azure Data Fundamentals',
      issuer: 'Microsoft',
      date: 'Dec 2025',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Journey</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Experience & Education</span>
          </h3>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            My professional experience, educational background, and certifications
            that have shaped my career in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-primary" size={24} />
              <h4 className="text-2xl font-semibold">Work Experience</h4>
            </div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={job.id} className="relative">
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 mt-1.5">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="glass-card rounded-xl p-6 flex-1 interactive-card h-full">
                      <div className="flex flex-wrap justify-between gap-2 mb-2">
                        <h5 className="text-xl font-medium">{job.title}</h5>
                        <div className="flex items-center text-foreground/70 text-sm">
                          <CalendarDays size={14} className="mr-1" />
                          {job.period}
                        </div>
                      </div>
                      
                      <p className="text-accent mb-3">{job.company}</p>
                      <p className="text-foreground/70 mb-3 text-sm">{job.description}</p>
                      
                      {job.details && (
                        <div className="space-y-2 mb-3">
                          {job.details.map((detail, idx) => (
                            <div key={idx} className="border-l-2 border-primary/30 pl-3">
                              <h6 className="font-medium text-foreground/90 text-sm">{detail.section}</h6>
                              <p className="text-foreground/70 text-xs">{detail.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-1.5">
                        {job.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            className="bg-primary/20 hover:bg-primary/30 text-foreground/90 border border-primary/30 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-secondary" size={24} />
              <h4 className="text-2xl font-semibold">Education</h4>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="glass-card rounded-xl p-6 interactive-card">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-lg font-medium">{edu.degree}</h5>
                      <p className="text-accent mb-3">{edu.institution}</p>
                      <p className="text-foreground/70 text-sm">{edu.description}</p>
                    </div>
                    <Badge className="bg-accent/20 text-foreground/90 border border-accent/30">
                      {edu.period}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications - Now below both Experience and Education */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-accent"
            >
              <rect x="4" y="5" width="16" height="16" rx="2" />
              <path d="m8 3v4" />
              <path d="m16 3v4" />
              <path d="m8 11h8" />
              <path d="m8 15h5" />
            </svg>
            <h4 className="text-2xl font-semibold">Certifications</h4>
          </div>

          <div className="glass-card rounded-xl p-6 interactive-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex flex-col justify-between">
                  <div>
                    <h5 className="text-base font-medium">{cert.name}</h5>
                    <p className="text-foreground/70 text-sm">{cert.issuer}</p>
                  </div>
                  <Badge className="bg-accent/20 text-foreground/90 border border-accent/30 mt-2 w-fit">
                    {cert.date}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;