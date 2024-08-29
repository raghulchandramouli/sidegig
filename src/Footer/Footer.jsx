import React from "react";
import { motion } from "framer-motion";
import footerLogo from "../assets/footer-logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

const Footer = () => {
  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.div className="footer-logo" variants={fadeInUp}>
          <img src={footerLogo} alt="SideGig Logo" />
        </motion.div>
        <motion.div className="footer-content" variants={fadeInUp}>
          <p>© 2024 SideGig. All Rights Reserved.</p>
        </motion.div>
        <motion.div className="footer-icons" variants={fadeInUp}>
          <FacebookIcon fontSize="large" className="social-icon" />
          <InstagramIcon fontSize="large" className="social-icon" />
          <XIcon fontSize="large" className="social-icon" />
          <LinkedInIcon fontSize="large" className="social-icon" />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
