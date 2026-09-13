import { FiGitHub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { ProjectType } from '../../utils/constants'

interface ProjectCardProps {
  project: ProjectType
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="space-y-4">
        <div className="aspect-w-16 aspect-h-9 w-full bg-muted/20 rounded-lg overflow-hidden">
          <span className="text-accent text-5xl flex items-center justify-center h-full">{project.emoji}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        
        <p className="text-muted leading-relaxed mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-muted/20 text-muted px-3 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-muted/20 text-muted rounded hover:bg-muted/30 transition-colors"
          >
            <FiGitHub size={16} />
            <span>GitHub</span>
          </a>
          
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-accent/20 text-accent rounded hover:bg-accent/30 transition-colors"
          >
            <FiExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard