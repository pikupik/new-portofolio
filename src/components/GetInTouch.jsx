import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";
import image from "../assets/about.png";

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const formRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
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
          trigger: formRef.current,
          start: "top 80%",
          end: "top 25%",
          toggleActions: "play none none reset",
          markers: false,
        },
      }
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygaalxw",
        "template_c6jk9tr",
        e.target,
        "qxJGL8kMZAW-cztJE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent!");
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send your message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      className="bg-[#0B0A37] bg-gradient-to-t from-[#0B0A37] to-[#0F0E47] py-20"
      id="get-in-touch"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white font-serif">
          Get In Touch
        </h2>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto p-6 bg-[#8686AC] rounded-lg shadow-lg text-white"
        >
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="from_name"
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0F0E47] px-6 py-3 text-white font-bold rounded-lg hover:bg-[#1F1E57] transition duration-300"
            >
              Send Message
            </button>
          </div>
          {successMessage && (
            <p className="mt-4 text-center text-sm text-white">
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
