import { FiGitHub, FiMail, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
        <p className="text-muted">© {new Date().getFullYear()} Personal Portfolio. All rights reserved.</p>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-accent transition-colors">
            <FiGitHub size={24} />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <FiLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <FiMail size={24} />
          </a>
        </div>
        
        <p className="text-xs text-muted/80">
          Built with React, Vite, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  )
}

export default Footer