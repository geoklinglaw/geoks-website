"use client";

import {
  Flex,
  Box,
  Text,
  VStack,
  Heading,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React, { Component, useRef, useState, useEffect } from "react";
import { Provider, LeftButton, RightButton } from "chakra-ui-carousel";
import Carousel from "./Carousel.js";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimation,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { FaLink } from "react-icons/fa";
import { AdobeFonts } from "react-adobe-fonts";
import Image from "next/image.js";

function ProjectCard() {
  const slides1 = [
    "/images/growthhub/landing.png",
    // "images/growthhub/userprofile.png",
    "/images/growthhub/events.png",
    "/images/growthhub/feed.png",
    "/images/growthhub/post.png",
  ];

  const slides2 = [
    "/images/trippinout/landing.png",
    "/images/trippinout/preferences.png",
    "/images/trippinout/locations.png",
    "/images/trippinout/dining.png",
    "/images/trippinout/itinerary.png",
  ];

  const slides3 = ["/images/budgetbot/:past.png"];

  const slides4 = [
    "/images/quizmodoro/timer.png",
    "/images/quizmodoro/quiz.png",
    "/images/quizmodoro/end.png",
    "/images/quizmodoro/results.png",
    "/images/quizmodoro/lock.png",
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <>
      <HStack>
        <div className="projectCard-layout">
          <VStack>
            <HStack className="projectCard-horizontal">
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                transition={{ delay: 0.1, duration: 0.4, ease: "linear" }}
              >
                <Box className="projectCard-container">
                  <VStack>
                    <Carousel autoSlide={false}>
                      {slides1.map((slide) => (
                        <Image
                          key={slide}
                          src={slide}
                          alt="Project Image"
                          width={1700}
                          height={1000}
                        />
                        // <img key={slide} src={slide} alt="Project Image" />
                      ))}
                    </Carousel>
                    <div className="flex flex-row justify-between w-[85%] mt-[1%]">
                      <p className="project-header">
                        Wellness Network Platform
                      </p>
                      <IconButton
                        colorScheme="#FFFFFF"
                        fontSize="20px"
                        justifyContent="flex-end"
                        icon={<FaLink />}
                      />
                    </div>
                    <p
                      style={{ fontFamily: "Colfax, sans-serif" }}
                      className="project-desc"
                    >
                      In collaboration with GrowthCollectiveSG, GrowthHub serves
                      as a social platform designed to nurture mental wellness
                      through events, community engagement, and supportive
                      social groups.
                    </p>
                  </VStack>
                </Box>
              </motion.div>

              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                transition={{ delay: 0.1, duration: 0.4, ease: "linear" }}
              >
                <Box className="projectCard-container">
                  <VStack>
                    <Carousel autoSlide={false}>
                      {slides2.map((slide) => (
                        <Image
                          key={slide}
                          src={slide}
                          alt="Project Image"
                          width={1700}
                          height={1000}
                        />
                        // <img key={slide} src={slide} alt="Project Image" />
                      ))}
                    </Carousel>
                    <div className="flex flex-row justify-between w-[85%] mt-[1%]">
                      <p className="project-header">
                        Travel Itinerary Generator
                      </p>
                      <IconButton
                        colorScheme="#FFFFFF"
                        fontSize="20px"
                        justifyContent="flex-end"
                        icon={<FaLink />}
                      />
                    </div>
                    <p
                      style={{ fontFamily: "Colfax, sans-serif" }}
                      className="project-desc"
                    >
                      This project offers a tailored travel planning experience,
                      creating customized itineraries based on users&apos;
                      preferences with destinations and dining selections.
                    </p>
                  </VStack>
                </Box>
              </motion.div>
            </HStack>
            <HStack>
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                transition={{ delay: 0.25, duration: 0.6, ease: "linear" }}
              >
                <Box className="projectCard-container">
                  <VStack>
                    <Carousel autoSlide={false}>
                      {slides3.map((slide) => (
                        <Image
                          key={slide}
                          src={slide}
                          alt="Project Image"
                          width={1700}
                          height={1000}
                        />
                        // <img key={slide} src={slide} alt="Project Image" />
                      ))}
                    </Carousel>
                    <div className="flex flex-row justify-between w-[85%] mt-[1%]">
                      <p className="project-header">Expenditure Tracker Bot</p>
                      <IconButton
                        colorScheme="#FFFFFF"
                        aria-label="Done"
                        fontSize="20px"
                        icon={<FaLink />}
                      />
                    </div>
                    <p
                      style={{ fontFamily: "Colfax, sans-serif" }}
                      className="project-desc"
                    >
                      Designed to simplify expense tracking with Google Sheets.
                      It efficiently categorizes expenses, manages one-time and
                      recurring transactions, and allows for easy modification
                      of past entries.
                    </p>
                  </VStack>
                </Box>
              </motion.div>

              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                transition={{ delay: 0.25, duration: 0.6, ease: "linear" }}
              >
                <Box className="projectCard-container mt-10 h-[410px]">
                  <VStack>
                    <Carousel autoSlide={false}>
                      {slides4.map((slide) => (
                        <Image
                          key={slide}
                          src={slide}
                          alt="Project Image"
                          width={1700}
                          height={1000}
                        />
                        // <img key={slide} src={slide} alt="Project Image" />
                      ))}
                    </Carousel>
                    <div className="flex flex-row justify-between w-[85%] mt-[1%]">
                      <p className="project-header">Quizmodoro</p>
                      <a href="https://www.youtube.com/watch?v=p4Ujme6SDEo&ab_channel=DarrellTeo">
                        <IconButton
                          colorScheme="#FFFFFF"
                          aria-label="Done"
                          fontSize="20px"
                          icon={<FaLink />}
                        />
                      </a>
                    </div>
                    <p
                      style={{ fontFamily: "Colfax, sans-serif" }}
                      className="project-desc"
                    >
                      Quizmodoro is an Android app that blends the Pomodoro
                      technique with quizzes. Users upload notes post-study to
                      receive a personalized quiz. Failing locks the phone for
                      an hour.
                    </p>
                  </VStack>
                </Box>
              </motion.div>
            </HStack>
          </VStack>
        </div>
      </HStack>
    </>
  );
}

export default ProjectCard;
