import { FiUser, FiBriefcase } from 'react-icons/fi'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted leading-relaxed">
              I'm a passionate Full-Stack Developer with over 5 years of experience 
              building modern web applications. I specialize in creating responsive, 
              user-friendly interfaces using React, TypeScript, and Tailwind CSS.
            </p>
            
            <p className="text-muted leading-relaxed">
              My journey in web development began with a fascination for how technology 
              can solve real-world problems. I've worked with startups and enterprise 
              companies alike, delivering products that combine clean code with 
              exceptional user experience.
            </p>
            
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <FiUser className="text-accent" />
                <span className="text-muted">Available for freelance work</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiBriefcase className="text-accent" />
                <span className="text-muted">Open to new opportunities</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-muted/20 rounded-full flex items-center justify-center">
              <span className="text-accent text-3xl">👤</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About