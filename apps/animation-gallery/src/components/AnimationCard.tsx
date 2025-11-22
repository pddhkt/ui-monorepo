import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Play, RotateCcw } from 'lucide-react';

interface AnimationCardProps {
  name: string;
  variants: Variants;
}

export function AnimationCard({ name, variants }: AnimationCardProps) {
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const replay = () => {
    setIsPlaying(true);
    setKey((prev) => prev + 1);
    setTimeout(() => setIsPlaying(false), 1000);
  };

  // Format name from camelCase to Title Case
  const formattedName = name.replace(/([A-Z])/g, ' $1').trim();
  const displayName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  return (
    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Preview Area */}
      <div className="relative h-48 bg-muted/20 flex items-center justify-center overflow-hidden">
        <motion.div
          key={key}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-lg shadow-lg"
        />

        {/* Replay Button */}
        <button
          onClick={replay}
          disabled={isPlaying}
          className="absolute bottom-3 right-3 p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors disabled:opacity-50"
          aria-label="Replay animation"
        >
          {isPlaying ? (
            <Play size={16} className="animate-pulse" />
          ) : (
            <RotateCcw size={16} />
          )}
        </button>
      </div>

      {/* Info Area */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{displayName}</h3>
        <code className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground font-mono">
          {name}
        </code>
      </div>
    </div>
  );
}
