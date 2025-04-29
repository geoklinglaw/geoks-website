"use client";
import { React, useRef, useState, useEffect, Suspense } from "react";
// import image from "../../public/images/png2.png";
import { AdobeFonts } from "react-adobe-fonts";
import Header from "../components/Header";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import theme from "../components/theme";
import StarsCanvas from "@/components/starbackground";
import ScrollToTop from "@/components/scrollToTop";
import ContactForm from "@/components/ContactForm";
import GlobeCanvas from "@/components/GlobeCanvas";
import UfoCanvas from "@/components/UfoCanvas";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import "../styles/home.css";
import "../styles/header.css";
import "../styles/global.css";
import { useInView } from "react-intersection-observer";
import { ChakraProvider } from "@chakra-ui/react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import AnimatedCursor from "react-animated-cursor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";

function Home() {
  const about = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const cursorRef = useRef(null);
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [moveUFO, setMoveUFO] = useState(false);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = (section) => {
    const sectionRef = { about, experience, projects }[section];
    if (sectionRef && sectionRef.current) {
      scrollToSection(sectionRef);
    }
  };

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const SectionWithStars = ({ showStars }) => {
    return <>{showStars && <StarsCanvas />}</>;
  };

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${
          e.clientY - 16
        }px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const up = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const down = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: -20,
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveUFO(true);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <AdobeFonts projectID="tbl6hye" />

      <motion.div className="container" initial="hidden" animate="show">
        <section
          className="hero"
          style={{ height: "100vh", position: "relative" }}
        >
          <motion.section
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <VStack>
              <code className="codeHeader"> Welcome to my space! </code>
              <div className="ufo-container">
                {/* <motion.div
                                className="box"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                duration: 0.3,
                                ease: [0, 0.5, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 7,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                                }}
                            >
                                <motion.div
                                initial={{ y: 0 }}
                                animate={moveUFO ? { y: 400 } : {}}
                                transition={{ duration: 2 }}
                                >
                                    <UfoCanvas/>
                                </motion.div> */}
                {/* </motion.div> */}
              </div>
            </VStack>
            <SectionWithStars showStars={true} />
          </motion.section>
        </section>
      </motion.div>

      <div ref={nextSectionRef} className=" bg-bookmark-black">
        <Header
          onMenuClick={handleMenuClick}
          style={{ position: "absolute", top: 0, width: "100%" }}
        />
        <div className="hero flex justify-center ">
          <ScrollToTop />
          <HStack className="about-me">
            <VStack className="left-about-container">
              <motion.h1
                animate={inView ? "visible" : "hidden"}
                variants={up}
                transition={{ duration: 0.3, ease: "easeOut" }}
                ref={ref}
                className="header4 text-left"
              >
                Hello! I&apos;m Geok Ling
              </motion.h1>
              <motion.p
                animate={inView ? "visible" : "hidden"}
                variants={up}
                transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
                ref={ref}
                style={{ fontFamily: "Colfax, sans-serif" }}
                className="intro font-opensans mt-4 tracking-[0.2px]"
              >
                Majoring in Information Systems from the National University of
                Singapore (NUS), I find joy in problem- solving and designing
                software products that makes my life easier. I am excited to explore, grow,
                and make an impact with tech :D <br></br>
                <br></br>
                Outside of development, I enjoy cooking, night walks
                and petting random cats on my walks. I&apos;m open to new experiences! 
                Food, activities, knowledge, anything really
              </motion.p>

              <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={up}
                transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
                ref={ref}
                className="skill-container"
              >
                <HStack>
                  <VStack align="stretch">
                    <p className="skills-text">Skills</p>
                    <HStack>
                      <p
                        style={{ fontFamily: "Colfax, sans-serif" }}
                        className="skills-list"
                      >
                        Fullstack Development, 
                      </p>
                      <p
                        style={{ fontFamily: "Colfax, sans-serif" }}
                        className="skills-list"
                      >
                        Data Engineering,
                      </p>
                      <p
                        style={{ fontFamily: "Colfax, sans-serif" }}
                        className="skills-list"
                      >
                        Web Scraping
                      </p>

                    </HStack>
                    <HStack>
                      <a href="/images/Portfolio.pdf">
                        <button className="bg-[#F3A639] rounded-lg pl-3 pr-3 pt-1 pb-1 mt-3 text-white mr-5 flex flex-row">
                          <code>portfolio</code>
                          <IoIosArrowForward className="mt-1 ml-2" />
                        </button>
                      </a>
                      <a href="/images/Resume.pdf">
                        <button className="bg-[#F3A639] rounded-lg pl-3 pr-3 pt-1 pb-1 mt-3 text-white flex flex-row">
                          <code>resume</code>
                          <IoIosArrowForward className="mt-1 ml-2" />
                        </button>
                      </a>
                    </HStack>
                  </VStack>
                </HStack>
              </motion.div>
            </VStack>
            <motion.div
              animate={inView ? "visible" : "hidden"}
              variants={down}
              transition={{ duration: 0.3, ease: "easeOut" }}
              ref={ref}
              className="profile-img"
            >
              <Image
                src="/images/profile1.png"
                alt="landingpage"
                width={330}
                height={280}
              />
            </motion.div>
          </HStack>
        </div>

        <div className="extendedhero">
          <h1 ref={experience} className="header5">
            Experience.
          </h1>
          <ChakraProvider theme={theme}>
            <ExperienceCard variant="base" size="md"></ExperienceCard>
          </ChakraProvider>
        </div>

        <div className="extendedhero">
          <ScrollToTop />
          <HStack justify={"center"}>
            <h1 ref={projects} className="header5">
              Projects
            </h1>
            <hr className="line" />
          </HStack>

          <ChakraProvider theme={theme}>
            <ProjectCard variant="base" size="md"></ProjectCard>
          </ChakraProvider>
        </div>

        <div className="pt-[10rem]" />
        <div className="pt-[10rem] pb-[7rem]" />

        <div className="container">
          <motion.div initial="hidden" animate="show">
            <section
              className="hero"
              style={{ height: "100vh", position: "relative" }}
            >
              <motion.section
                style={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <SectionWithStars showStars={true} />
                <div className="contact-container">
                  <div className="contact-form-container">
                    <ContactForm />
                  </div>

                  <div className="globe-container">
                    <GlobeCanvas />
                  </div>
                </div>
              </motion.section>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default Home;
