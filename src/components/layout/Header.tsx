import Link from 'next/link'
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
          <Link href="#hero" className="hover:text-accent transition-colors">
            Hero
          </Link>
          <Link href="#about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-accent transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-accent transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
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
            <Link href="#hero" className="block hover:text-accent transition-colors py-2">
              Hero
            </Link>
            <Link href="#about" className="block hover:text-accent transition-colors py-2">
              About
            </Link>
            <Link href="#skills" className="block hover:text-accent transition-colors py-2">
              Skills
            </Link>
            <Link href="#projects" className="block hover:text-accent transition-colors py-2">
              Projects
            </Link>
            <Link href="#experience" className="block hover:text-accent transition-colors py-2">
              Experience
            </Link>
            <Link href="#contact" className="block hover:text-accent transition-colors py-2">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header