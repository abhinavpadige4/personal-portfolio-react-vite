import { FiSun, FiMoon } from 'react-icons/fi'
import { useDarkMode } from '../../hooks/useDarkMode'
import { motion } from 'framer-motion'

const Hero = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode()

  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[calc(100vh-4.5rem)] flex flex-col items-center justify-center px-6 pt-16 pb-24 text-center"
    >
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Hi, I'm Alex Johnson
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-2xl">
          Full-Stack Developer passionate about building scalable web applications
        </p>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-3 rounded hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <a 
            href="#about"
            className="inline-block px-6 py-3 bg-accent text-white rounded hover:bg-accent/90 transition-colors"
          >
            About Me
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero