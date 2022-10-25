import React from "react";
import "./Contact.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const { inView, ref } = useInView();
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 3,
        bounce: 0.3,
      },
    });
  }
  return (
    <motion.div
      className="portfolio__contact container"
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={animationControl}
    >
      <h2>Get In Touch</h2>
      <h4>Want to work together or have any questions?</h4>
      <button>
        <a
          href="mailto: mohamednasr8687@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Say Hello
        </a>
      </button>
    </motion.div>
  );
};

export default Contact;
