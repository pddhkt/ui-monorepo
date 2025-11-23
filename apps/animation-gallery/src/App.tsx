import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Header } from './components/Header';
import { AnimationCard } from './components/AnimationCard';
import { CodeBlock } from './components/CodeBlock';
import * as presets from '@design-system/animations/presets';
import { fadeIn } from '@design-system/animations/presets';

// Animation categories
const animations = {
  Fade: {
    fadeIn: presets.fadeIn,
    fadeInDown: presets.fadeInDown,
    fadeInUp: presets.fadeInUp,
    fadeInLeft: presets.fadeInLeft,
    fadeInRight: presets.fadeInRight,
    fadeOut: presets.fadeOut,
  },
  Scale: {
    scaleIn: presets.scaleIn,
    scaleOut: presets.scaleOut,
    popIn: presets.popIn,
    grow: presets.grow,
    shrink: presets.shrink,
  },
  Slide: {
    slideInDown: presets.slideInDown,
    slideInUp: presets.slideInUp,
    slideInLeft: presets.slideInLeft,
    slideInRight: presets.slideInRight,
    slideOutUp: presets.slideOutUp,
    slideOutDown: presets.slideOutDown,
    slideOutLeft: presets.slideOutLeft,
    slideOutRight: presets.slideOutRight,
  },
  Rotate: {
    rotateIn: presets.rotateIn,
    rotateOut: presets.rotateOut,
    flipInX: presets.flipInX,
    flipInY: presets.flipInY,
  },
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors">
        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="container mx-auto px-4 py-16"
        >
          <Header />

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-muted-foreground mb-8">
              A comprehensive collection of reusable animation presets, transitions, and motion
              utilities built with Framer Motion. Use these animations across all your projects
              in the monorepo.
            </p>
            <CodeBlock
              code={`import { fadeIn, springQuick } from '@design-system/animations/presets'
import { useAnimateOnScroll } from '@design-system/animations/hooks'`}
            />
          </motion.div>

          {/* Animation Categories */}
          {Object.entries(animations).map(([category, categoryAnimations], categoryIndex) => (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">{category} Animations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(categoryAnimations).map(([name, variant]) => (
                  <AnimationCard key={name} name={name} variants={variant} />
                ))}
              </div>
            </motion.section>
          ))}

          {/* Usage Examples */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Usage Examples</h2>
            <div className="space-y-8">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-4">Basic Animation</h3>
                <CodeBlock
                  code={`import { motion } from 'framer-motion'
import { fadeInUp } from '@design-system/animations/presets'

function MyComponent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      Animated content
    </motion.div>
  )
}`}
                />
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-4">With Custom Transitions</h3>
                <CodeBlock
                  code={`import { motion } from 'framer-motion'
import { scaleIn } from '@design-system/animations/presets'
import { springBouncy } from '@design-system/animations/transitions'

function MyComponent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={scaleIn}
      transition={springBouncy}
    >
      Bouncy animation
    </motion.div>
  )
}`}
                />
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-4">Scroll-Based Animation</h3>
                <CodeBlock
                  code={`import { motion } from 'framer-motion'
import { useAnimateOnScroll } from '@design-system/animations/hooks'
import { fadeInUp } from '@design-system/animations/presets'

function MyComponent() {
  const ref = useRef(null)
  const isInView = useAnimateOnScroll(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      Animates when scrolled into view
    </motion.div>
  )
}`}
                />
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-muted-foreground py-8 border-t"
          >
            <p>Built with Framer Motion • Part of the Design System Monorepo</p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
