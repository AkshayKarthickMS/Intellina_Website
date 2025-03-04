import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import dineshImg from "../assets/dinesh.jpg";
import akshayImg from "../assets/akshay.jpg";
import chairmanImg from "../assets/chairman.jpg";
import coordinatorImg from "../assets/coordinator.jpg";

// Team Data
const boardMembers = [
  { name: "Harish B", role: "Chairman", image: chairmanImg },
  { name: "Sudharshan M Prabhu", role: "Coordinator", image: coordinatorImg },
];

const developers = [
  { name: "Dineshkumar R", role: "Senior Developer", image: dineshImg },
  { name: "Akshay Karthick M S", role: "Junior Developer", image: akshayImg },
];

const Team = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Page Title */}
<div className="text-center pt-24 pb-8">
  <h1 className="text-4xl md:text-5xl font-extrabold text-neon-blue uppercase tracking-widest drop-shadow-md">
    Meet Our Team
  </h1>
  <p className="text-gray-300 text-sm md:text-base mt-2 max-w-2xl mx-auto px-4">
    A team of passionate individuals dedicated to making an impact through innovation, creativity, and leadership.
  </p>
</div>


      <div ref={containerRef} className="container mx-auto px-6 py-6">
        {/* Board Members Section */}
        <div className="text-center mb-10">
  <h2 className="text-2xl md:text-3xl font-bold text-neon-blue uppercase drop-shadow-md">
    Board Members
  </h2>
</div>

        <div className="flex flex-wrap justify-center gap-8">
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-tertiary p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-64"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-neon-blue shadow-md"
              />
              <h2 className="text-lg font-bold mt-3">{member.name}</h2>
              <p className="text-neon-green text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Web Developers Section */}
        <div className="text-center mt-16 mb-10">
  <h2 className="text-2xl md:text-3xl font-bold text-neon-blue uppercase drop-shadow-md">
    Web Developers
  </h2>
</div>

        <div className="flex flex-wrap justify-center gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-tertiary p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-64"
            >
              <img
                src={dev.image}
                alt={dev.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-neon-blue shadow-md"
              />
              <h2 className="text-lg font-bold mt-3">{dev.name}</h2>
              <p className="text-neon-green text-sm">{dev.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
