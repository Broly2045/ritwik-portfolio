import { Code, BookOpen, Scale } from "lucide-react";
import starWarsWhite from "../assets/starwars-white.png";
import meWhite from "../assets/me-white.png";
import meDark from "../assets/me-dark.png";

const aboutPoints = [
  {
    icon: Code,
    title: "Developer",
    description:
      "MERN stack engineer building secure, scalable, production-ready applications.",
  },
  {
    icon: BookOpen,
    title: "CS50x Certified",
    description:
      "Harvard-certified with strong fundamentals in DSA, C, Python, SQL and JS.",
  },
  {
    icon: Scale,
    title: "Law + Code",
    description:
      "Blending legal insight with tech — building tools like Nyaya-AI for Indian law.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gray-100 dark:bg-gray-900"
    >
      {/* Background (Light Mode Only) */}
      <div className="absolute inset-0 hidden dark:hidden md:block">
        <img
          src={starWarsWhite}
          alt="background"
          className="w-[80%] h-[80%] object-cover opacity-30 mx-auto my-auto"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="pixel-heading text-center mb-12">ABOUT ME</h2>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto pixel-container bg-white/40 dark:bg-black/40 backdrop-blur-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            
            {/* Image */}
            <div className="w-48 h-48 overflow-hidden pixel-borders">
              <img
                src={meWhite}
                alt="Ritwik Anand Mishra"
                className="w-full h-full object-cover block dark:hidden"
              />
              <img
                src={meDark}
                alt="Ritwik Anand Mishra"
                className="w-full h-full object-cover hidden dark:block"
              />
            </div>

            {/* Text */}
            <div className="md:w-2/3 font-pixel-body text-lg space-y-4">
              <p>
                Hey! I'm <strong>Ritwik Anand Mishra</strong> — a Full-Stack Developer based in Bhubaneswar, India.
                I build scalable, production-ready web applications using the MERN stack.
              </p>

              <p>
                I design robust REST APIs, integrate AI systems,
                and implement secure authentication and payment workflows.
                I enjoy taking products from idea to deployment with clean architecture.
              </p>

              <p>
                Currently pursuing BBA LL.B at KIIT School of Law, I bring a unique blend of
                technical and legal understanding—useful for building secure, compliant systems.
                Harvard CS50x certified with strong DSA foundations.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
          {aboutPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="pixel-container text-center group transition-colors bg-white/30 dark:bg-black/30 backdrop-blur-sm hover:bg-pixel-green dark:hover:bg-pixel-purple"
              >
                <div className="flex flex-col items-center">
                  <Icon className="w-8 h-8 mb-4 text-pixel-purple dark:text-pixel-green" />

                  <h3 className="font-pixel text-lg mb-2 group-hover:text-black dark:group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="font-pixel-body group-hover:text-black dark:group-hover:text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}