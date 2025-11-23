import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary/10"
      >
        <Sparkles className="w-10 h-10 text-primary" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
      >
        Animation Library
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-xl text-muted-foreground"
      >
        Reusable Motion Presets & Utilities
      </motion.p>
    </div>
  );
}
