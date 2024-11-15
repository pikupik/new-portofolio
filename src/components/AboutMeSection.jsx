// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../assets/about.png";

gsap.registerPlugin(ScrollTrigger);

const AboutMeSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "top 25%",
          toggleActions: "play none none reset",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="relative bg-gradient-to-t from-[#0F0E47] to-[#251673] min-h-screen flex items-center justify-center py-20 lg:py-40">
        <h2 className="absolute top-10 lg:top-10 left-0 right-0 text-4xl font-bold text-white text-center font-serif">
          About Me
        </h2>

        <img
          src={image}
          alt="home"
          className="absolute bottom-0 right-0 w-40 h-40 md:w-50 md:h-50 lg:w-80 lg:h-80 animate-bounce"
        />

        <div
          ref={aboutRef}
          className="max-w-xl lg:max-w-3xl p-6 bg-[#000000] bg-opacity-70 rounded-lg text-justify text-white shadow-2xl mx-4 mt-8 sm:font-extralight lg:font-mono"
        >
          <p className="sm:text-xl lg:text-2xl">
            Saya sebagai developer yang berasal dari Indonesia, Jakarta.
            <br />
            <br />
            Saya sangat hobi menjadi developer. Saya pernah menjadi developer
            server game GTA yang dijuluki SAMP (SA:MP) menggunakan bahasa C dan
            Pawn Compiler. Saya mengembangkan server game tersebut dari tahun
            2020 hingga 2022.
            <br />
            <br />
            Selain itu, saya juga sangat menikmati menjadi Backend Developer,
            mulai dari membuat API, sistem WMS. Saya suka bekerja di backend
            menggunakan Node.js dan Express.js.
            <br />
            <br />
            Ketertarikan saya pada backend tumbuh sejak saya mempelajari
            pengembangan server game SAMP. Ketika tidak di depan komputer, saya
            biasanya bermain gitar, berkeliling dengan teman-teman, atau
            menulis.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
