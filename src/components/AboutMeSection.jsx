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
      <div className="relative bg-gradient-to-t from-[#0F0E47] to-[#251673] min-h-screen flex flex-col items-center justify-center py-20 lg:py-20">
        <h2 className="absolute top-10 lg:top-10 left-0 right-0 text-4xl font-bold text-white text-center font-serif">
          About Me
        </h2>

        <div
          ref={aboutRef}
          className="max-w-xl lg:max-w-3xl p-6 bg-[#000000] bg-opacity-70 rounded-lg text-justify text-white shadow-2xl mx-4 mt-8 sm:font-extralight lg:font-mono"
        >
          <p className="sm:text-xl lg:text-2xl">
            Halo Semua!🖐. Izinkan saya memberitahu singkat tentang bagaimana
            saya menjadi web dev.
            <br />
            <br />
            Saya sangat hobi menjadi developer. Saya pernah menjadi developer
            server game GTA yang dijuluki SAMP (SA:MP) menggunakan bahasa C dan
            Pawn Compiler. Saya mengembangkan server game tersebut dari tahun
            2020 hingga 2022.
            <br />
            <br />
            Selain itu, saya juga sangat menikmati menjadi Backend Developer
            Menggunakan Handphone, mulai dari membuat API, memperbaiki Error.
            Saya suka bekerja di backend menggunakan Node.js dan Express.js.
            <br />
            <br />
            Ketertarikan saya pada backend tumbuh sejak saya mempelajari
            pengembangan server game SAMP. Akhirnya ketika saya menggunakan
            Laptop saya beralih menjadi fullstack web developer.
            <br />
            <br />
            Dan Portofolio saya kali ini juga digunakan menggunakan handphone.
            <br />
            <br />
            Ketika tidak di depan komputer, saya biasanya bermain gitar,
            berkeliling dengan teman-teman, atau menulis.
          </p>
        </div>

        {/* Image below the text content for mobile */}
        <div className="mt-8 w-full flex justify-center lg:absolute lg:bottom-0 lg:right-0 lg:w-auto">
          <img
            src={image}
            alt="home"
            className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-none lg:w-80 lg:h-80 animate-bounce"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
