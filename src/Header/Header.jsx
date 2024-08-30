import React from "react";
import { motion } from "framer-motion";
import "./Header.css";
import skillImg from "../assets/logo.png";

const Header = () => {
  return (
    <motion.div
      className="header-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="header-logo"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={skillImg}
          alt=""
          className="image-button"
          height={98}
          width={125}
        />
      </motion.div>
      {/* <motion.button
        className="header-button"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Get Started
      </motion.button> */}
    </motion.div>
  );
};

export default Header;
