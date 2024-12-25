import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import image from "../assets/home.png";
import TechStack from "./comps/TechStack";

const HomeSection = () => {
  const backendRef = useRef(null);
  const developerRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    timeline
      .fromTo(
        backendRef.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -50,
          opacity: 0,
          duration: 1,
        }
      )
      .fromTo(
        developerRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "+=0"
      )
      .fromTo(
        developerRef.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -50,
          opacity: 0,
          duration: 1,
        },
        "+=1"
      )
      .fromTo(
        backendRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      );
  }, []);

  return (
    <div
      id="home"
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#251673]"
    >
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>

      <img
        src={image}
        alt="home"
        className="absolute bottom-10 left-5 w-28 h-28 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-80 lg:h-80 animate-bounce"
      />
      <div className="relative text-center text-white px-4 sm:px-6 md:px-8">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4">
          Vikry Panca Julnadi
        </h1>

        <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-18">
          <p className="absolute w-full" ref={backendRef}>
            Specialist
          </p>
          <p className="absolute w-full" ref={developerRef}>
            Backend Developer
          </p>
        </div>
        <TechStack />
      </div>
    </div>
  );
};

export default HomeSection;
