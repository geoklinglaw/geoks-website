"use client";
import { React, useRef, useState, useEffect } from "react";
// import image from "../../public/images/png2.png";
import Header from "../components/Header";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import theme from "../components/theme";
import StarsCanvas from "@/components/starbackground";
import ScrollToTop from "@/components/scrollToTop";
import ContactForm from "@/components/ContactForm";
import Globe from "@/components/Globe";
// import profile from "../../public/images/profile.jpg";
import '../styles/home.css';
import '../styles/header.css';
import '../styles/global.css';
import { ChakraProvider } from '@chakra-ui/react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';
import AnimatedCursor from "react-animated-cursor"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { HStack } from '@chakra-ui/react';
import Image from 'next/image';





function Home() {
    const about = useRef(null);
    const experience = useRef(null);
    const projects = useRef(null);
    const cursorRef = useRef(null);

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
        return (
          <>
            {showStars && <StarsCanvas />}

          </>
        );
      };

    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    useEffect(() => {
        const moveCursor = (e) => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
          }
        };
      
        window.addEventListener('mousemove', moveCursor);
      
        return () => {
          window.removeEventListener('mousemove', moveCursor);
        };
    }, []);
      
      
    const fadeIn = (direction = 'up', duration = 0.3) => {
        let initialX = 0;
        let initialY = 0;
    
        switch (direction) {
            case 'up':
                initialY = 50;
                break;
            case 'down':
                initialY = -50;
                break;
            case 'left':
                initialX = -50;
                break;
            case 'right':
                initialX = 50;
                break;
            default:
                break;
        }
    
        return {
            hidden: {
                opacity: 0,
                x: initialX,
                y: initialY,
            },
            show: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration: duration,
                    ease: 'easeOut',
                },
            },
        };
    };
    
    const variants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    };
      

    return (
        <>  
        <div ref={cursorRef} className="cursor" />

                <motion.div className="container" initial="hidden" animate="show">
                    <section className="hero" style={{height:'100vh', position: 'relative'}}>
                        
                        <motion.section
                            style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            <code className="codeHeader">
                                Welcome to my digital universe!

                            </code>
                            <SectionWithStars showStars={true} />
                        </motion.section>
                    </section>
                </motion.div>

                <div className=" bg-bookmark-black">
                    <Header onMenuClick={handleMenuClick} style={{ position: 'absolute', top: 0, width: '100%' }} />

                        <div className="md:container md:mx-auto hero">
                            <div className="md:container md:mx-auto flex justify-center items-center">
                                <div className="mr-19 pl-11">
                                    <motion.h1 
                                        variants={fadeIn('up', 0.3)} 
                                        initial="hidden"
                                        whileInView={'show'}
                                        viewport={{once: false, amount: 0.7}}
                                        className="header2">
                                            Law Geok Ling
                                        </motion.h1>
                                    <motion.p 
                                        variants={fadeIn('up', 0.3)} 
                                        initial="hidden"
                                        whileInView={'show'}
                                        viewport={{once: false, amount: 0.7}}
                                        className="header3"> 
                                            I am an aspiring software developer 
                                    </motion.p>
                                    <motion.p  
                                        variants={fadeIn('up', 0.3)} 
                                        initial="hidden"
                                        whileInView={'show'}
                                        viewport={{once: false, amount: 0.7}}
                                        className="header3"> 
                                            from NUS Information Systems (Year 2)
                                    </motion.p>
                                    <motion.button 
                                        variants={fadeIn('up', 0.3)} 
                                        initial="hidden"
                                        whileInView={'show'}
                                        viewport={{once: false, amount: 0.7}}
                                        className="lets-talk-btn">
                                            Contact Me!
                                    </motion.button>
                                    <motion.div
                                        variants={fadeIn('up', 0.6)} 
                                        initial="hidden"
                                        whileInView={'show'}
                                        viewport={{once: false, amount: 0.7}}>
                                            <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
                                            <FontAwesomeIcon className="icons" icon={faGithub} />
                                            <FontAwesomeIcon className="icons" icon={faTelegram} />
                                    </motion.div>
                                </div>
                                <motion.div 
                                    variants={fadeIn('down', 0.5)} 
                                    initial="hidden"
                                    whileInView={'show'}
                                    viewport={{once: false, amount: 0.7}}
                                    className="justify-end">
                                    <Image
                                        src="/images/landingpage.png"
                                        alt="landingpage"
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                        className="object-scale-down max-w-lg ml-8"
                                    />
                                </motion.div>
                            </div> 
                        </div>


                    <div className="hero flex justify-center ">
                        <ScrollToTop />
                        <div className="flex mt-20 flex-col md:container items-center">
                            <div className="flex">
                                <div className="basis-1/2 flex-col">

                                    <h1 ref={about} className="header4 text-left">Get to know me  😃</h1>
                                    <p className="intro  mt-5"> 
                                    Majoring in Information Systems from the National <br></br>
                                    University of Singapore (NUS), I find joy in problem-<br></br>
                                    solving and designing software products.  I am excited to <br></br>
                                    learn, grow and hopefully, make a small yet meaningful <br></br>
                                    impact in the realm of technology and beyond. <br></br>
                                    <br></br>
                                    
                                    Outside of development, I enjoy cooking, taking leisure <br></br>
                                    walks and petting random cats on my walks. Recently, I <br></br>
                                    embraced the thrills of solo travel with a trip across <br></br>
                                    Taiwan, an experience that has sparked my newfound <br></br>
                                    love for solo adventures :D
                                    </p>
                                </div>
                                <div className="basis-1/2 flex profile-img"> 
                                <Image
                                    src="/images/profile.jpg"
                                    alt="landingpage"
                                    width={256} 
                                    height={200} 
                                    layout="responsive"
                                    className="ml-20 object-scale-down max-w-[16rem]"
                                />
                                    {/* <Image className="ml-20 object-scale-down max-w-[16rem]" src={'/images/profile.jpg'} alt="profile"/> */}
                                </div>
                            </div>
 
                            <div>
                                <p className="skills-text"> My Skills </p>
                                <div className="skills-gap"> 
                                    <div className="flex gap-4">
                                        <button className="skills-large-btn2"> Java </button>
                                        <button className="skills-large-btn2"> Python </button>
                                        <button className="skills-large-btn2"> ReactJS </button>
                                        <button className="skills-large-btn2"> Javascript </button>
                                        <button className="skills-large-btn2"> SQL </button>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="skills-large-btn1"> Firebase </button>
                                        <button className="skills-large-btn1"> NodeJS </button>
                                        <button className="skills-large-btn1"> TailwindCSS </button>
                                        <button className="skills-large-btn1"> Typescript </button>
                                    </div>
                                    <div className="flex gap-6">
                                        <button className="skills-large-btn1"> Git </button>
                                        <button className="skills-large-btn1"> HTML5 </button>
                                        <button className="skills-large-btn1"> Figma </button>
                                        <button className="skills-large-btn1"> Illustrator </button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="hero ">
                        <h1 ref={experience} className="header5">Experience.</h1>
                        <ChakraProvider theme={theme}>
                        <ExperienceCard variant="base" size="md">
                        </ExperienceCard>
                        </ChakraProvider>
                    </div>


                    <div className="hero">
                        <ScrollToTop />
                        <HStack justify={"center"}>
                            <h1 ref={projects} className="header5">Projects</h1>
                            <hr className="line"/>
                        </HStack>
                        
                        <ChakraProvider theme={theme}>
                        <ProjectCard variant="base" size="md">
                        </ProjectCard>
                        </ChakraProvider>
                    </div>

                    <div className="container-space"/>

                    <div>
                        <motion.div className="container" initial="hidden" animate="show">
                        <section className="hero" style={{height:'100vh', position: 'relative'}}>
                            
                            <motion.section
                                style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            >
                                
                                <SectionWithStars showStars={true} /> 
                                <ContactForm/>
                                {/* <Globe/> */}
                            </motion.section>
                        </section>
                        </motion.div>
                    </div>
                    
                </div>
        </>
    );
}
export default Home;


