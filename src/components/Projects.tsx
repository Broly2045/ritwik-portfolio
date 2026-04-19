import { ExternalLink, Github } from 'lucide-react';
import nyayaImg from '../assets/nyaya-ai.png';
import studypathImg from '../assets/studypath-ai.png';
import emailyImg from '../assets/secretecho.png';
import ecommerceImg from '../assets/ecommerce.jpg';

export default function Projects() {
  const projects = [
    {
      title: "Nyaya-AI",
      tagline: "Indian Legal Intelligence Platform",
      description: "AI-powered legal document platform for the Indian legal system. Autonomously generates court-ready Bail Applications, Legal Notices & Petitions with statutory citations. Clause extraction from PDF/DOCX mapped to BNS 2023, IPC & the Constitution. Interactive case chat in English & Hindi.",
      tags: ["Next.js 15", "TypeScript", "Groq LLaMA 3.3 70B", "MongoDB Atlas", "NextAuth.js", "Upstash Redis", "Framer Motion"],
      image: nyayaImg,
      githubLink: "https://github.com/Broly2045",
      liveLink: "https://nyaya-ai-six.vercel.app/",
      period: "Feb – Mar 2026"
    },
    {
      title: "StudyPath-AI",
      tagline: "AI-Powered Study Abroad Planner",
      description: "Full-stack platform streamlining study-abroad planning with AI counseling. Secure JWT + OAuth 2.0 auth, scalable RESTful APIs with Prisma ORM, and Groq LLM for contextual AI-driven recommendations. Won Certificate of Appreciation at Humanity Founders Hackathon 🏆",
      tags: ["React 18", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "Google OAuth 2.0", "Groq LLM"],
      image: studypathImg,
      githubLink: "https://github.com/Broly2045",
      liveLink: "https://studypath-ai.vercel.app/",
      period: "Jan – Feb 2026 · 🏆 Hackathon"
    },
    {
      title: "Emaily",
      tagline: "Email Survey Platform",
      description: "MERN-based email survey platform with secure authentication, credit-based payment processing via Stripe, and transactional email delivery via SendGrid. Real-time survey response processing through webhook endpoints.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Stripe API", "SendGrid API"],
      image: emailyImg,
      githubLink: "https://github.com/Broly2045/Emaily",
      liveLink: null,
      period: "Oct – Dec 2025"
    },
    {
      title: "ShopNode",
      tagline: "Server-Rendered E-Commerce App",
      description: "Server-rendered e-commerce platform with product listings, cart management, and dynamic pricing. Modular routing and middleware architecture with strict server-side validation using Express Validator.",
      tags: ["Node.js", "Express.js", "HTML5", "CSS3", "Express Validator"],
      image: ecommerceImg,
      githubLink: "https://github.com/Broly2045/E-Commerce",
      liveLink: null,
      period: "Jul – Sep 2025"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="pixel-heading text-center">MY PROJECTS</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="pixel-container group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all">
                <div className="relative mb-4 overflow-hidden border-2 border-black dark:border-white">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover object-top transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 font-pixel text-[9px] bg-black/80 text-pixel-green px-2 py-1">
                    {project.period}
                  </div>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-4">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white text-black rounded-full hover:bg-pixel-green transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="p-2 bg-white text-black rounded-full hover:bg-pixel-purple transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-pixel text-lg text-pixel-purple dark:text-pixel-green">{project.title}</h3>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-1 font-pixel text-[9px] text-pixel-green border border-pixel-green px-2 py-1 hover:bg-pixel-green hover:text-black transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-pixel-green inline-block animate-pulse"></span>
                        LIVE
                      </a>
                    )}
                  </div>
                  <p className="font-pixel text-xs text-pixel-purple/70 dark:text-pixel-green/70 mb-2">{project.tagline}</p>
                  <p className="font-pixel-body mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 text-xs font-pixel bg-gray-200 dark:bg-gray-700 border border-black dark:border-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/Broly2045" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pixel-button"
            >
              See More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
