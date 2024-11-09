import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, FileJson, Blocks, Palette, Server,
  ChevronLeft, ChevronRight, 
  MousePointerClick
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillCard } from './SkillCard';

const skills = [
  { 
    name: 'React', 
    icon: <Code2 strokeWidth={1.5} />, 
    proficiency: 90,
    color: 'text-cyan-400'
  },
  { 
    name: 'JavaScript', 
    icon: <FileJson strokeWidth={1.5} />, 
    proficiency: 85,
    color: 'text-yellow-400'
  },
  { 
    name: 'HTML', 
    icon: <Blocks strokeWidth={1.5} />, 
    proficiency: 95,
    color: 'text-orange-400'
  },
  { 
    name: 'CSS', 
    icon: <Palette strokeWidth={1.5} />, 
    proficiency: 88,
    color: 'text-blue-400'
  },
  { 
    name: 'Node.js', 
    icon: <Server strokeWidth={1.5} />, 
    proficiency: 82,
    color: 'text-green-400'
  }
];

export function SkillsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carousel = useRef(null);
  const cardWidth = 352; // 320px width + 2 * 16px margin

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const handleDragEnd = (e, { offset, velocity }) => {
    setIsDragging(false);
    const swipe = offset.x;

    if (Math.abs(velocity.x) > 500 || Math.abs(swipe) > 100) {
      if (swipe < 0 && currentIndex < skills.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (swipe > 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    }
  };

  const nextSlide = () => {
    if (currentIndex < skills.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-[96px] animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Technical Expertise
            </h2>
          </motion.div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white/75 hover:text-white transition-colors ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700/50'
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white/75 hover:text-white transition-colors ${
              currentIndex === skills.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700/50'
            }`}
            disabled={currentIndex === skills.length - 1}
          >
            <ChevronRight size={24} />
          </motion.button>

          <div className="overflow-hidden px-4 py-8">
            <motion.div
              ref={carousel}
              className="cursor-grab active:cursor-grabbing"
              whileTap={{ cursor: "grabbing" }}
              onDragStart={() => setIsDragging(true)}
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                animate={{ x: -currentIndex * cardWidth }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onDragEnd={handleDragEnd}
                className="flex"
              >
                <AnimatePresence mode="wait">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <SkillCard {...skill} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Drag instruction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-2 mt-6 text-gray-400"
          >
            <MousePointerClick size={16} />
            <span className="text-sm">Drag to explore more skills</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export default SkillsSection;