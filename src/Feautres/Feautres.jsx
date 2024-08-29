// src/components/Feautres.jsx
import React from "react";
import "./Feautres.css";
import { motion } from "framer-motion";
import ChatIcon from "@mui/icons-material/Chat";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
import LoopIcon from "@mui/icons-material/Loop";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Feautres = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="feautres-section">
      <center>
        <motion.div
          className="feautres-heading"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1>Why choose Side GIG?</h1>
        </motion.div>
        <motion.div
          className="feautres-paragraph"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <p>
            See SideGig in action and learn how to get your job within just a
            few swipes.
          </p>
        </motion.div>
      </center>
      <main className="feautres">
        <motion.section
          className="swipe"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <center>
            <SwipeRightIcon style={{ fontSize: 48 }} />
            <h2 className="swipe-heading">Easy Swipe</h2>
            <p className="swipe-paragraph">
              Effortlessly swipe your jobs through job listings tailored to your
              skills and interests.
            </p>
          </center>
        </motion.section>
        <motion.section
          className="chat"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <center>
            <ChatIcon style={{ fontSize: 48 }} />
            <h2 className="chat-heading">Secured Messaging</h2>
            <p className="chat-paragraph">
              Initiate conversations with employers directly within the app.
            </p>
          </center>
        </motion.section>
        <motion.section
          className="alerts"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <center>
            <PrivacyTipIcon style={{ fontSize: 48 }} />
            <h2 className="alert-heading">Customer Alerts</h2>
            <p className="alert-paragraph">
              Customize notifications for new job listings that match your
              career aspirations.
            </p>
          </center>
        </motion.section>
        <motion.section
          className="feedback"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 1 }}
        >
          <center>
            <LoopIcon style={{ fontSize: 48 }} />
            <h2 className="feedback-heading">Feedback Loop</h2>
            <p className="feedback-paragraph">
              Receive constructive feedback on your applications to improve your
              chances.
            </p>
          </center>
        </motion.section>
        <motion.section
          className="privacy"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 1.2 }}
        >
          <center>
            <VerifiedUserIcon style={{ fontSize: 48 }} />
            <h2 className="privacy-heading">Privacy First</h2>
            <p className="privacy-paragraph">
              Control who sees your profile and personal information within the
              app.
            </p>
          </center>
        </motion.section>
        <motion.section
          className="skills"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 1.4 }}
        >
          <center>
            <AutoAwesomeIcon style={{ fontSize: 48 }} />
            <h2 className="skills-heading">Showcase Your Skills</h2>
            <p className="skills-paragraph">
              Build a professional profile and highlight your expertise.
            </p>
          </center>
        </motion.section>
      </main>
    </div>
  );
};

export default Feautres;
