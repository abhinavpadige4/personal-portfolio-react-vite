'next/link'
import { useDarkMode } from '../hooks/useDarkMode'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { useState } from 'react'

const Header = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 flex h-16 items-center justify-between px-6 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-foreground">Portfolio</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="hover:text-accent transition-colors">
            Hero
          </a>
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-accent transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-accent transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-accent transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </nav>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded hover:bg-muted"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
        
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded hover:bg-muted"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-t border-border p-4">
          <nav className="space-y-4">
            <a href="#hero" className="block hover:text-accent transition-colors py-2">
              Hero
            </a>
            <a href="#about" className="block hover:text-accent transition-colors py-2">
              About
            </a>
            <a href="#skills" className="block hover:text-accent transition-colors py-2">
              Skills
            </a>
            <a href="#projects" className="block hover:text-accent transition-colors py-2">
              Projects
            </a>
            <a href="#experience" className="block hover:text-accent transition-colors py-2">
              Experience
            </a>
            <a href="#contact" className="block hover:text-accent transition-colors py-2">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header