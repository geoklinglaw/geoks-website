"use client";

import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import "../styles/scrollTop.css";
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    // Check to see if the scroll event listener can be improved
    useEffect(() => {
      const toggleVisibility = () => setIsVisible(window.scrollY > 300);
  
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility); // Clean up the event listener
    }, []);
  
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    // Check if styles are applied correctly
    return (
      isVisible && (
        <button onClick={scrollTop} className="top-btn-position top-btn-style">
          <FaAngleDoubleUp aria-label="Scroll to top" />
        </button>
      )
    );
  };
  
export default ScrollToTop;