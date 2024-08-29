import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import vectorImg from "../assets/Vector.png";
import heroImg from "../assets/Hero-image.png";

const Hero = () => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="hero-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-heading">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Swipe right to get your job
          </motion.h1>
        </div>
        <motion.div
          className="vector-img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={vectorImg} alt="Decorative Vector" />
        </motion.div>
        <motion.div
          className="paragraph"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>Get your jobs easily by swiping your gigs with secure payment.</p>
        </motion.div>
        <motion.div
          className="signup"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <input type="email" placeholder="you@example.com" />
          <motion.button
            className="hero-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Sign Up
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.img
        src={heroImg}
        alt="Hero Visual"
        className="hero-image"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.section>
  );
};

export default Hero;
