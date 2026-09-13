import { motion } from 'framer-motion'
import { skillData } from '../../utils/constants'

const Skills = () => {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Skills & Proficiency
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillData.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">{skill.name}</span>
                      <span className="font-medium text-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full bg-accent transition-width duration-750 ease-out`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills