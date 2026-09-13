import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [showError, setShowError] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.target as HTMLFormElement)
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then(() => {
      setShowSuccess(true)
      setShowError(false)
      (e.target as HTMLFormElement).reset()
    })
    .catch((error) => {
      setShowError(true)
      setShowSuccess(false)
      console.error('FAILED...', error)
    })
    .finally(() => {
      setIsSubmitting(false)
    })
  }

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Get In Touch
        </h2>
        
        {showSuccess && (
          <div className="mb-8 p-4 bg-accent/10 text-accent rounded">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        
        {showError && (
          <div className="mb-8 p-4 bg-accent/10 text-accent/80 rounded">
            Oops! Something went wrong. Please try again later.
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-accent" />
              <div>
                <h3 className="font-medium text-foreground">Location</h3>
                <p className="text-muted">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FiMail className="text-accent" />
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <p className="text-muted">alex.johnson@email.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FiPhone className="text-accent" />
              <div>
                <h3 className="font-medium text-foreground">Phone</h3>
                <p className="text-muted">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-3">
              <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder-muted/50"
                placeholder="Your Name"
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder-muted/50"
                placeholder="your@email.com"
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder-muted/50"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-accent text-white rounded hover:bg-accent/90 transition-colors 
                         ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact