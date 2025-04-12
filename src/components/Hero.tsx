import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Create animated background grid
    const createGrid = () => {
      grid.innerHTML = '';
      const cellSize = 50;
      const columns = Math.ceil(grid.offsetWidth / cellSize);
      const rows = Math.ceil((grid.offsetHeight * 3) / cellSize); // Triple height for continuous flow
      
      for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement('div');
        const random = Math.random();
        
        // Different cell types based on random value
        if (random < 0.1) {
          cell.className = 'bg-neon-purple/10 border border-neon-purple/30 rounded-md';
        } else if (random < 0.2) {
          cell.className = 'bg-neon-blue/10 border border-neon-blue/20 rounded-md';
        } else if (random < 0.25) {
          cell.className = 'bg-neon-cyan/5 border border-neon-cyan/20 rounded-full';
        } else {
          cell.className = random < 0.4 ? 'border border-white/5 rounded-md' : '';
        }
        
        grid.appendChild(cell);
      }

      // Set the grid layout
      grid.style.gridTemplateColumns = `repeat(${columns}, ${cellSize}px)`;
      grid.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
    };

    createGrid();
    window.addEventListener('resize', createGrid);

    return () => {
      window.removeEventListener('resize', createGrid);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated grid background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 grid animate-grid-flow opacity-40"
        style={{ willChange: 'transform' }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background opacity-90"></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <p className="text-accent font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-gradient">SUDHEER KUMAR</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/90 max-w-2xl">
            I create <span className="text-neon-cyan">innovative</span> and <span className="text-neon-purple">impactful</span> digital experiences
          </h2>
          <p className="text-foreground/70 max-w-2xl">
          Data scientist specializing in deriving actionable insights from complex data. Currently, I'm focused on building AI-driven solutions for real-world challenges.
          </p>
          
          {/* Social links */}
          <div className="flex items-center space-x-6 mt-12">
            <a 
              href="https://github.com/Sudheerbmb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-neon-purple transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/sudheer-kumar-thati/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-neon-blue transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/SudheerTruly/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-neon-cyan transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="mailto:sudheermsdvk@gmail.com" 
              className="text-foreground/80 hover:text-neon-orange transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
