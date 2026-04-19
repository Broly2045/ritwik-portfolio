import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`mailto:ritwik5402@gmail.com?subject=Contact from Portfolio&body=${encodeURIComponent(formData.message)}`, '_blank');
    toast({ title: "Opening mail client!", description: "Your message is ready to send." });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="pixel-heading text-center">CONTACT ME</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pixel-container">
              <h3 className="font-pixel text-lg mb-4 text-pixel-purple dark:text-pixel-green">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-pixel-body mb-1">Name</label>
                  <input
                    type="text" id="name" name="name" value={formData.name}
                    onChange={handleChange} required
                    className="w-full px-3 py-2 border-2 border-black dark:border-white bg-transparent font-pixel-body focus:outline-none focus:border-pixel-green dark:focus:border-pixel-purple"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-pixel-body mb-1">Email</label>
                  <input
                    type="email" id="email" name="email" value={formData.email}
                    onChange={handleChange} required
                    className="w-full px-3 py-2 border-2 border-black dark:border-white bg-transparent font-pixel-body focus:outline-none focus:border-pixel-green dark:focus:border-pixel-purple"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-pixel-body mb-1">Message</label>
                  <textarea
                    id="message" name="message" value={formData.message}
                    onChange={handleChange} required rows={4}
                    className="w-full px-3 py-2 border-2 border-black dark:border-white bg-transparent font-pixel-body focus:outline-none focus:border-pixel-green dark:focus:border-pixel-purple resize-none"
                  ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting}
                  className={`pixel-button w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="pixel-container">
              <h3 className="font-pixel text-lg mb-4 text-pixel-purple dark:text-pixel-green">Connect With Me</h3>
              <div className="space-y-6">
                <p className="font-pixel-body">
                  Open to full-time roles, freelance projects, and interesting collaborations.
                  I'd love to hear from you!
                </p>
                <div className="space-y-4">
                  {[
                    { icon: <Mail className="w-5 h-5" />, text: "ritwik5402@gmail.com", href: "mailto:ritwik5402@gmail.com" },
                    { icon: <Linkedin className="w-5 h-5" />, text: "linkedin.com/in/ritwik-anand-mishra", href: "https://www.linkedin.com/in/ritwik-anand-mishra-65a41b202" },
                    { icon: <Github className="w-5 h-5" />, text: "github.com/Broly2045", href: "https://github.com/Broly2045" },
                  ].map((item, index) => (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 font-pixel-body hover:text-pixel-purple dark:hover:text-pixel-green transition-colors">
                      <div className="w-8 h-8 border-2 border-black dark:border-white flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>

                {/* Education & Achievement highlight */}
                <div className="mt-6 border-t-2 border-black dark:border-white pt-4">
                  <p className="font-pixel text-xs text-pixel-purple dark:text-pixel-green mb-2">🏆 ACHIEVEMENT</p>
                  <p className="font-pixel-body text-sm">Certificate of Appreciation — Humanity Founders Hackathon, Feb 2026 for StudyPath-AI.</p>
                </div>
                <div>
                  <p className="font-pixel text-xs text-pixel-purple dark:text-pixel-green mb-2">📍 LOCATION</p>
                  <p className="font-pixel-body text-sm">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
