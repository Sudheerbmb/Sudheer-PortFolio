import React, { useState, useEffect } from 'react';
import { Heart, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ECGLine = () => {
  return (
    <motion.div 
      className="relative w-32 h-8 mx-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <svg
        viewBox="0 0 120 20"
        className="absolute inset-0 w-full h-full"
      >
        <motion.path
          d="M 0,10 L 10,10 L 15,10 L 20,10 L 25,10 L 30,0 L 35,20 L 40,10 L 45,10 L 50,10 L 120,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </motion.div>
  );
};

const TimeDisplay = ({ time }: { time: string }) => {
  const digits = time.split('');
  
  return (
    <div className="flex items-center space-x-[2px] font-mono text-lg text-foreground/80 ml-2">
      {digits.map((digit, index) => (
        <motion.span
          key={`${index}-${digit}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: index * 0.05
          }}
        >
          {digit}
        </motion.span>
      ))}
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState<string>('');
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-background border-t border-border/20 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.a
              href="#"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Sudheer
            </motion.a>
            <p className="text-foreground/60 mt-2 text-sm">
              Creating digital experiences that matter.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <motion.div
              className="flex items-center justify-center bg-background/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Clock size={16} className="text-primary" />
              <AnimatePresence mode="wait">
                <TimeDisplay time={time} />
              </AnimatePresence>
              <ECGLine />
              <motion.div
                className="w-2 h-2 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <p className="text-foreground/60 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-primary animate-pulse" /> using React & TailwindCSS
            </p>
            <p className="text-foreground/60 text-sm">
              &copy; {currentYear} Sudheer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
