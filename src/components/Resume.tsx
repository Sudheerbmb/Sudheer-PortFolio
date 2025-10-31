import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Mail, Phone, MapPin, Github, Linkedin, Calendar, Award, GraduationCap, Briefcase, Code2 } from 'lucide-react';

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

const Resume = ({ isOpen, onClose }: ResumeProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-lg border border-accent/20">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-3xl font-bold text-gradient mb-2">SUDHEER KUMAR THATI</DialogTitle>
              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>Kadapa, Andhra Pradesh 516001</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-4 top-4"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              <span>+91-7042383822</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <span>sudheermsdvk@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Linkedin className="w-4 h-4" />
              <a 
                href="https://linkedin.com/in/sudheer-kumar-thati/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/sudheer-kumar-thati/
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Github className="w-4 h-4" />
              <a 
                href="https://github.com/Sudheerbmb/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/Sudheerbmb/
              </a>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8 py-6">
          {/* Internship */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-semibold text-accent">Internship</h3>
            </div>
            <div className="glass-card p-4">
              <h4 className="text-lg font-medium">Data Science Intern</h4>
              <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                <Calendar className="w-4 h-4" />
                <span>Futurense Technologies | June 2024 - Aug 2024</span>
              </div>
              <ul className="list-disc list-inside text-sm text-foreground/80 mt-3 space-y-2">
                <li>Performed exploratory data analysis(EDA) on 20,000+ data points to extract key insights from various marketing campaigns and endorsements</li>
                <li>Developed a machine learning model with 87% accuracy to predict the capital investment required for achieving targeted business outcomes</li>
                <li>Implemented a regression-based optimization framework, improving lead conversion rates by 25%, by identifying top-performing counselors and agents</li>
                <li>Designed and deployed a medical web application with advanced functionalities like medicine booking, Doctor consultation, Diagnostics including an AI-powered chatbot and a diabetes prediction model with 85%+ precision.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-semibold text-accent">Projects</h3>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">MCQ Generator with Flask and AWS Bedrock</h4>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>Python, AWS, EC2, HTML, CSS, JS | Jan 2025 - Feb 2025</span>
                </div>
                <ul className="list-disc list-inside text-sm text-foreground/80 mt-3 space-y-2">
                  <li>Built a Flask-based MCQ Generator supporting 3 file formats(PDF,DOCX,TXT) and generating + AI-Powered MCQs using AWS Bedrock(Llama 3-8B LLM)</li>
                  <li>Integrated FPDF for instant PDF downloads, enabling users to save MCQs in under 5 seconds with HTML,CSS Frontend</li>
                  <li>Deployed on AWS EC2 with Gunicorn, ensuring 99.9% uptime, 2x faster processing and secure file handling</li>
                  <li>Github Repository Link: <a href="https://github.com/Sudheerbmb/Bedrock" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://github.com/Sudheerbmb/Bedrock</a></li>
                </ul>
              </div>

              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">Breast Cancer Detection System</h4>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>Machine Learning, Predictive Analytics, tkinter | Sept 2023 - Oct 2023</span>
                </div>
                <ul className="list-disc list-inside text-sm text-foreground/80 mt-3 space-y-2">
                  <li>Leveraged Support Vector Machine (SVM), Linear Regression and Random Forest Classifier, XGBoost, achieving classification accuracy exceeding 90%</li>
                  <li>Built an interactive desktop application using Python's tkinter for real-time breast cancer classification</li>
                  <li>Designed a seamless user interface for inputting patient data and displaying predictive results dynamically</li>
                  <li>Youtube Explanation Video Link: <a href="https://youtu.be/ZRLmUZ4y8EQ?feature=shared" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://youtu.be/ZRLmUZ4y8EQ?feature=shared</a></li>
                </ul>
              </div>

              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">On Your Own Hotel Booking Analysis</h4>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>MySQL, ER Modeling | Oct 2022 - Nov 2022</span>
                </div>
                <ul className="list-disc list-inside text-sm text-foreground/80 mt-3 space-y-2">
                  <li>Designed an ER model with 10+ entities to represent customer bookings, hotel details and payment transactions, ensuring optimized relational structure</li>
                  <li>Executed business SQL queries to analyze occupancy rates, customer preferences, seasonal and payment types</li>
                  <li>Processed booking records to derive insights on room demand, pricing strategies and revenue patterns, supporting business</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certificates */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-semibold text-accent">Certificates</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">Python for Data Science</h4>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>Learnbay | Feb 2025</span>
                </div>
              </div>
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">Azure Data Scientist Associate</h4>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>Microsoft | Dec 2024</span>
                </div>
              </div>
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">Azure Data Fundamentals</h4>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>Microsoft | Dec 2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-semibold text-accent">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">Languages:</h4>
                <p className="text-sm text-foreground/70 mt-2">Python, Java, C, C++, SQL</p>
              </div>
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">Technologies/Frameworks:</h4>
                <p className="text-sm text-foreground/70 mt-2">Apache Hadoop, AWS, Azure, Flask, Scikit-Learn, Pandas, Numpy, Seaborn, Matplotlib</p>
              </div>
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">Skills:</h4>
                <p className="text-sm text-foreground/70 mt-2">Data Structures and Algorithms, Problem-Solving, Data Reporting, Scripting in Python, Big Data Processing</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-semibold text-accent">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">Lovely Professional University Punjab</h4>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>Computer Science and Engineering — CGPA: 8.87 | 2022 – 2026</span>
                </div>
                <p className="text-sm text-foreground/70 mt-1">Jalandhar, Punjab</p>
              </div>
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">Narayana Junior College</h4>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>12th with Science — Percentage: 97.5% | 2019 – 2021</span>
                </div>
                <p className="text-sm text-foreground/70 mt-1">Kadapa, Andhra Pradesh</p>
              </div>
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium">Sri Chaitanya Techno School</h4>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>10th with Science — CGPA: 10 | 2018 – 2019</span>
                </div>
                <p className="text-sm text-foreground/70 mt-1">Rajampet, Andhra Pradesh</p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-end pt-4">
          <Button 
            onClick={() => window.open('/Specialized.docx', '_blank')}
            className="bg-primary hover:bg-primary/90"
          >
            Download Resume
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Resume; 