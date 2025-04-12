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
          content: 'Developed and deployed a sophisticated machine learning model with 87% accuracy to predict capital investment requirements for achieving targeted business outcomes and dynamic counsellor allotment.'
        },
        {
          section: 'Healthcare Application Development',
          content: 'Designed and deployed a comprehensive medical web application featuring advanced functionalities including medicine booking, AI Medical Chatbot and a diabetes prediction model with 85%+ precision.'
        }
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Web Development', 'AI', 'Healthcare Tech'],
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
      overview: 'Mastered Python programming fundamentals, data structures, and libraries like NumPy, Pandas, and Matplotlib. Gained expertise in data manipulation, visualization, and statistical analysis techniques essential for data science projects.'
    },
    {
      id: 2,
      name: 'Azure Data Scientist Associate',
      issuer: 'Microsoft',
      date: 'Dec 2024',
      overview: 'Acquired skills in implementing machine learning solutions on Azure, including data preparation, model training, deployment, and monitoring. Learned to use Azure Machine Learning service, Azure Databricks, and Azure Synapse Analytics for end-to-end ML workflows.'
    },
    {
      id: 3,
      name: 'Azure Data Fundamentals',
      issuer: 'Microsoft',
      date: 'Dec 2024',
      overview: 'Gained foundational knowledge of core data concepts, relational and non-relational data, and data analytics. Learned about Azure data services, including Azure SQL Database, Azure Cosmos DB, and Azure Synapse Analytics.'
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
              {workExperience.map((job) => (
                <div key={job.id} className="glass-card rounded-xl p-6 interactive-card">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-lg bg-white/5 border border-accent/20 overflow-hidden">
                          <img 
                            src="/fut1.jpg" 
                            alt="Futurense Technologies" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h5 className="text-xl font-medium">{job.title}</h5>
                          <p className="text-accent">{job.company}</p>
                        </div>
                      </div>
                      <Badge className="bg-accent/20 text-foreground/90 border border-accent/30 whitespace-nowrap">
                        {job.period}
                      </Badge>
                    </div>
                    
                    <p className="text-foreground/70 text-sm">{job.description}</p>
                    
                    {job.details && (
                      <div className="space-y-3">
                        {job.details.map((detail, idx) => (
                          <div key={idx} className="border-l-2 border-primary/30 pl-3">
                            <h6 className="font-medium text-foreground/90 text-sm">{detail.section}</h6>
                            <p className="text-foreground/70 text-xs">{detail.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
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
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/5 border border-accent/20 overflow-hidden flex-shrink-0">
                        <img 
                          src={
                            edu.institution.includes('Lovely Professional University') ? '/lpu.png' :
                            edu.institution.includes('Narayana') ? '/nar.avif' :
                            '/chai.jpeg'
                          }
                          alt={edu.institution}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-medium">{edu.degree}</h5>
                        <p className="text-accent">{edu.institution}</p>
                        <p className="text-foreground/70 text-sm mt-1">{edu.description}</p>
                      </div>
                    </div>
                    <Badge className="bg-accent/20 text-foreground/90 border border-accent/30 whitespace-nowrap">
                      {edu.period}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <a 
                key={cert.id} 
                href={
                  cert.name.includes('Azure Data Scientist') ? 'https://learn.microsoft.com/en-us/users/sudheerkumar-3457/credentials/8ce2fb3bcb6c5bbe' :
                  cert.name.includes('Azure Data Fundamentals') ? 'https://learn.microsoft.com/en-us/users/sudheerkumar-3457/credentials/cf40454706fe3de6' :
                  'https://invoice-lb.s3.us-east-2.amazonaws.com/certificate/SUDHEER-KUMARTue-Feb-18-2025-05-34-16-GMT-0000--Coordinated-Universal-Time--2284gv3r.pdf'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 interactive-card hover:border-accent/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg bg-white/5 border border-accent/20 overflow-hidden flex-shrink-0 group-hover:border-accent/40 transition-colors">
                        <img 
                          src={
                            cert.issuer.includes('Learnbay') ? '/lb.png' :
                            cert.issuer.includes('Microsoft') ? '/mc.jpg' :
                            '/mc.jpg'
                          }
                          alt={cert.issuer}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold group-hover:text-primary transition-colors">{cert.name}</h5>
                        <p className="text-accent font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    <Badge className="bg-accent/20 text-foreground/90 border border-accent/30 whitespace-nowrap group-hover:bg-accent/30 transition-colors">
                      {cert.date}
                    </Badge>
                  </div>
                  
                  {/* Certificate Image */}
                  <div className="relative aspect-[1.4/1] rounded-lg overflow-hidden border border-accent/20 group-hover:border-accent/30 transition-colors bg-white/5">
                    <img 
                      src={
                        cert.name.includes('Azure Data Scientist') ? '/mic.jpg' :
                        cert.name.includes('Azure Data Fundamentals') ? '/mic0.jpg' :
                        '/LB.jpg'
                      }
                      alt={`${cert.name} Certificate`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;