import { motion } from 'framer-motion'
import { experienceData } from '../../utils/constants'

const Experience = () => {
  return (
    <motion.section 
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute inset-0 w-0.5 bg-accent/20"></div>
          
          {/* Timeline Items */}
          <div className="relative pt-12">
            {experienceData.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative mb-12 ${index % 2 === 0 ? 'left-0' : 'right-0'} md:${index % 2 === 0 ? 'left-0' : 'right-0'} `}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-2 -top-2 w-4 h-4 bg-accent rounded-full border-2 border-background"></div>
                
                {/* Timeline Content */}
                <div className={`w-full max-w-lg ${index % 2 === 0 ? 'ml-12' : 'mr-12'} bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 p-6`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-muted text-sm">{exp.date}</span>
                  </div>
                  
                  <h4 className="font-medium text-accent mb-2">{exp.company}</h4>
                  
                  <p className="text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-muted/20 text-muted px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience