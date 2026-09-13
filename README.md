# Personal Portfolio React Vite

A modern personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.

## Features

- 🎨 **Dark Modern Theme** - Clean, professional dark mode design with smooth transitions
- 📱 **Fully Responsive** - Looks great on all devices from mobile to desktop
- ⚡ **Built with Vite** - Lightning fast development and build times
- 🎭 **Framer Motion Animations** - Smooth animations and transitions throughout
- 📧 **Contact Form** - Integrated with EmailJS for form submissions
- 🌓 **Dark Mode Toggle** - Persistent dark mode preference using localStorage
- 🔍 **Smooth Scroll Navigation** - Easy navigation with active link highlighting
- 💼 **Projects Showcase** - Display your best work with live demos and GitHub links
- 📈 **Skills Section** - Visual skill proficiency bars with categorized skills
- 📅 **Experience Timeline** - Vertical timeline showing your professional journey

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: EmailJS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpadige4/personal-portfolio-react-vite.git
   cd personal-portfolio-react-vite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```env
   VITE_EMAILJS_USER_ID=your_emailjs_user_id
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure the build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add the environment variables in Vercel dashboard
5. Deploy!

## Project Structure

```
src/
├── components/
│   ├── layout/           # Header and Footer components
│   └── sections/         # Main page sections (Hero, About, Skills, etc.)
├── hooks/                # Custom React hooks
├── utils/                # Constants and utility functions
├── App.tsx               # Main App component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Customization

### Personal Information

Edit the content in each section component to reflect your personal information:
- `src/components/sections/Hero.tsx` - Name and tagline
- `src/components/sections/About.tsx` - Bio and profile
- `src/components/sections/Skills.tsx` - Skill categories and proficiency
- `src/components/sections/Projects.tsx` - Project details
- `src/components/sections/Experience.tsx` - Work experience
- `src/components/sections/Contact.tsx` - Contact information

### Constants

Modify `src/utils/constants.ts` to update:
- Skill data and proficiency levels
- Project information
- Experience timeline

### Styling

The theme colors are configured in `tailwind.config.cjs`. You can customize:
- Background colors
- Foreground/text colors
- Accent colors
- And more using Tailwind's configuration

## Environment Variables

Create a `.env` file with the following variables for the contact form to work:

- `VITE_EMAILJS_USER_ID` - Your EmailJS user ID
- `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID

You can get these from [EmailJS](https://www.emailjs.com/) after creating an account.

## License

MIT License - feel free to use this portfolio as a template for your own!

## Acknowledgments

- Built with ❤️ using React and Vite
- Deployed on Vercel
- Last updated: 2024-01-15