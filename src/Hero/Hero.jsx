import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import vectorImg from "../assets/Vector.png";
import heroImg from "../assets/hero-img.png";
import { db } from "../firebase"; // Import the initialized Firestore instance
import { doc, updateDoc, arrayUnion } from "firebase/firestore"; // Import Firestore methods

const Hero = () => {
  const [email, setEmail] = useState(""); // State to store the email input

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state when input changes
  };

  const validateEmail = (email) => {
    // Regular expression for validating an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async () => {
    if (email) {
      if (!validateEmail(email)) {
        alert("Please enter a valid email address."); // Notify the user if email is invalid
        return;
      }

      try {
        // Reference the "emaillist" document in the "email" collection in Firestore
        const emailDocRef = doc(db, "email", "emaillist");

        // Update the document by adding the new email to the "emails" array
        await updateDoc(emailDocRef, {
          emails: arrayUnion(email), // Append the new email to the existing array
          timestamp: new Date(), // Optionally update the timestamp
        });

        console.log("Email added successfully!");
        alert("Email saved successfully!"); // Notify the user
        setEmail(""); // Clear the input field after saving
      } catch (e) {
        console.error("Error adding email: ", e);
        alert("Failed to save email."); // Notify the user in case of error
      }
    } else {
      alert("Please enter an email address."); // Notify the user if email is empty
    }
  };

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
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={handleEmailChange} // Update state when input changes
          />
          <motion.button
            className="hero-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSignUp} // Handle form submission
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
