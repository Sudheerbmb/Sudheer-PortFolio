import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const categories = ['All', 'AI/ML', 'Web', 'Data Science'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 6,
      title: 'LexEcho:Audio Transcription and Summarization Web App',
      description: 'Flask web app that transcribes M4A audio files using Whisper, summarizes content with Gemini API, and extracts key topics.',
      category: 'AI/ML',
      tags: ['Flask', 'Whisper', 'Gemini API', 'FFmpeg', 'NLTK', 'Python'],
      image: '/echo.png',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 5,
      title: 'Medical Chatbot using Flask and Groq API',
      description: 'Flask-based chatbot that responds to medical-related queries using the Groq API with medical keyword filtering.',
      category: 'AI/ML',
      tags: ['Flask', 'Groq API', 'Langchain', 'Python', 'Web Interface'],
      image: '/bot.png',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 4,
      title: 'Weather ETL Pipeline with Apache Airflow',
      description: 'ETL pipeline using Apache Airflow to fetch, process, and store weather data from Open-Meteo API into PostgreSQL.',
      category: 'Data Science',
      tags: ['Apache Airflow', 'ETL', 'PostgreSQL', 'Python', 'API Integration'],
      image: '/pipe.jpg',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 1,
      title: 'MCQ Generator with Flask and AWS Bedrock',
      description: 'Flask-based MCQ Generator supporting PDF, DOCX, and TXT formats, leveraging AWS Bedrock (Llama 3-8B LLM).',
      category: 'AI/ML',
      tags: ['Flask', 'AWS Bedrock', 'EC2', 'FPDF', 'HTML', 'CSS', 'JS'],
      image: '/mcc.png',
      links: {
        demo: '#',
        github: 'https://github.com/Sudheerbmb/Bedrock',
      },
    },
    
   
   
    
    
    {
      id: 7,
      title: 'Groq Code Forge: Python Code Optimizer',
      description: 'Web application that optimizes Python code using Groq API, providing complexity analysis and detailed explanations.',
      category: 'AI/ML',
      tags: ['Flask', 'Groq API', 'Langchain', 'Python', 'Code Optimization'],
      image: '/codeopt1.png',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 8,
      title: 'Movie Recommendation System',
      description: 'Flask-based recommendation system using Collaborative Filtering (SVD) and Content-Based Filtering (TF-IDF with cosine similarity).',
      category: 'AI/ML',
      tags: ['Flask', 'SVD', 'TF-IDF', 'Scikit-learn', 'Surprise', 'Python'],
      image: '/mv.jpg',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 2,
      title: 'Breast Cancer Detection System',
      description: 'Machine learning-based breast cancer classification system using SVM, Linear Regression, and Random Forest.',
      category: 'AI/ML',
      tags: ['SVM', 'Random Forest', 'XGBoost', 'tkinter', 'Python'],
      image: '/bcc.png',
      links: {
        demo: 'https://youtu.be/ZRLmUZ4y8EQ?feature=shared',
        github: '#',
      },
    },
    {
      id: 3,
      title: 'On Your Own Hotel Booking Analysis',
      description: 'SQL-based project analyzing customer bookings, hotel details, and payment transactions.',
      category: 'Data Science',
      tags: ['SQL', 'ER Modeling', 'Data Analysis'],
      image: '/sqq.webp',
      links: {
        demo: '#',
        github: '#',
      },
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Showcase</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">My Projects</span>
          </h3>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills and expertise
            in different areas of development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90"
                  : "neon-border"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card rounded-xl overflow-hidden interactive-card"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <Badge className="bg-accent/20 text-accent">{project.category}</Badge>
                </div>
                
                <p className="text-foreground/70 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="border-primary/30 text-foreground/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between pt-4">
                  <div className="flex gap-3">
                    <a 
                      href={project.links.github} 
                      className="text-foreground/80 hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.links.demo} 
                      className="text-foreground/80 hover:text-accent transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <a 
                    href={`#project-${project.id}`} 
                    className="text-sm text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;