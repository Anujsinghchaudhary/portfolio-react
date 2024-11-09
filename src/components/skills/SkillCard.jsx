import React from 'react';
import { motion } from 'framer-motion';

export function SkillCard({ name, icon, proficiency, color }) {
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center gap-6 cursor-pointer relative overflow-hidden group min-w-[320px] mx-4 border border-gray-700/50"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing orb behind icon */}
      <div className={`absolute top-12 w-16 h-16 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${color}`} />
      
      <motion.div 
        className="text-6xl relative"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <div className={`${color} transition-colors duration-300`}>
          {icon}
        </div>
      </motion.div>

      <h3 className="text-2xl font-bold text-white tracking-tight">{name}</h3>
      
      <div className="w-full bg-gray-700/30 rounded-full h-3 backdrop-blur-sm p-[2px]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${color.replace('text-', 'bg-')} relative group`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
        </motion.div>
      </div>

      <div className="flex items-center gap-2">
        <span className={`text-lg font-semibold ${color}`}>{proficiency}%</span>
        <span className="text-sm text-gray-400">Proficiency</span>
      </div>
    </motion.div>
  );
}

export default SkillCard;