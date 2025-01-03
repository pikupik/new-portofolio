import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Restaurant App",
    description:
      "Aplikasi Restoran Online. Lengkap dengan payment gateway dan Admin Dashboard.",
    link: "https://restaurant-nine-gold.vercel.app/",
    image: "/resto.jpg", // Replace with your actual image path
  },
  {
    id: 2,
    title: "Quran Online",
    description: "Aplikasi Quran Online. Lengkap",
    link: "https://quran-pages.vercel.app/",
    image: "/quran.jpg", // Replace with your actual image path
  },
  {
    id: 3,
    title: "User Auth API Free",
    description: "Restfull API user auth free. use it try it",
    link: "https://github.com/pikupik/userauthapi",
    image: "/api.jpg", // Replace with your actual image path
  },
];

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((project) => {
      gsap.fromTo(
        project,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            toggleActions: "play none none reset",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="bg-[#0F0E47] py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white font-serif">
          My Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="flex flex-col bg-sky-950 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 w-full bg-gray-800">
                <img
                  alt={project.title}
                  src={project.image}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-white mb-4 hover:text-[#f0f0f0] transition-colors duration-300"
                >
                  {project.title}
                </a>
                <p className="text-white flex-grow">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 text-sm font-medium text-white bg-violet-900 rounded-lg hover:bg-[#1F1E57] transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
