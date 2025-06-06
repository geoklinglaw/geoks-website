"use client";

import { Flex, Box, Text, VStack, Heading, HStack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AdobeFonts } from 'react-adobe-fonts';


function ExperienceSection() {

    const [ref, inView] = useInView({
        triggerOnce: false
    });

    const lineAnimation = {
        hidden: { scaleY: 0 }, 
        visible: {
          scaleY: 1, 
          transition: { duration: 1.5, ease: 'linear' },
        },
    };
      
    const logoAnimation1 = {
        hidden: { opacity: 0, y: -20 }, 
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.1, ease: "linear" }, 
        },
    };

    const logoAnimation2 = {
        hidden: { opacity: 0, y: -5 }, 
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.38, duration: 0.2, ease: "linear" },
        },
    };

    const textAnimation1 = {
        hidden: { opacity: 0, y: -5 }, 
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.3, ease: "linear" }, 
        },
    };
      
    const textAnimation2 = {
        hidden: { opacity: 0, y: 0 }, 
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.5, ease: "linear" }, 
        },
    };

  return (
    <>
    <HStack className='timeline'>
        <motion.div className="job-container" initial="hidden">
            <motion.div className="timeline-line"
                variants={lineAnimation}
                initial="hidden"
                whileInView="visible"
                animate={inView ? "visible" : "hidden"}
                // viewport={{ once: true, amount: 0.8 }}
            />
            <div className="animated-border">
            
                <VStack spacing={20} align="start">
                <Flex className="job-container-2" direction="row" justify="center" align="center">
                        <HStack spacing={10} align="start">
                        <motion.img 
                            className="logo" 
                            src={'/images/stripe.png'}
                            variants={logoAnimation1}
                            initial="hidden"
                            whileInView="visible"
                            animate={inView ? "visible" : "hidden"}
                            // viewport={{ once: true, amount: 0.8 }} 
                        />
                        <motion.div
                            variants={textAnimation1}
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{ once: true, amount: 0.8 }} 
                        >
                            <VStack align="start" style={{alignItems:'flex-start'}}>
                                <HStack>
                                    <p className="role">Incoming Software Engineer Intern</p>
                                    <code className="company">@ Stripe</code>
                                </HStack>
                                <p className="date text-[15px] mb-2">May 2025 - Aug 2025</p>
                            </VStack>
                        </motion.div>
                        </HStack>
                    </Flex>

                    <Flex className="job-container-2" direction="row" justify="center" align="center">
                        <HStack spacing={10} align="start">
                        <motion.img 
                            className="logo" 
                            src={'/images/autodesk.png'}
                            variants={logoAnimation1}
                            initial="hidden"
                            whileInView="visible"
                            animate={inView ? "visible" : "hidden"}
                            // viewport={{ once: true, amount: 0.8 }} 
                        />
                        <motion.div
                            variants={textAnimation1}
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{ once: true, amount: 0.8 }} 
                        >
                            <VStack align="start" style={{alignItems:'flex-start'}}>
                                <HStack>
                                    <p className="role">Software Engineer Intern</p>
                                    <code className="company">@ Autodesk</code>
                                </HStack>
                                <p className="date text-[15px] mb-2">Jan 2024 - June 2024</p>
                                <p style={{ fontFamily: 'Colfax, sans-serif' }} className="job-description text-[15px]">
                                    Spearheaded the licensing data pipelines using Apache Airflow and Spark, processing thousands 
                                    of entries and boosting data processing efficiency for multiple projects by over 40%.
                                </p>
                                <p style={{ fontFamily: 'Colfax, sans-serif' }} className="job-description text-[15px]">
                                    Developed a robust data instrumentation strategy using Go and OpenTelemetry to enhance data 
                                    quality and consistency 
                                </p>
                                <p style={{ fontFamily: 'Colfax, sans-serif' }} className="job-description text-[15px]">
                                    Clinched Best use of AL/ML award for APAC Licensing Hackathon.
                                </p>
                            </VStack>
                        </motion.div>
                        </HStack>
                    </Flex>
                    
                    <Flex className="job-container-2" direction="row" justify="center" align="center">
                        <HStack spacing={10} align="start">
                            <motion.img 
                                className="logo" 
                                src={'/images/htx.png'}
                                variants={logoAnimation2}
                                initial="hidden"
                                whileInView="visible"
                                animate={inView ? "visible" : "hidden"}
                                // viewport={{ once: true, amount: 0.8 }} 
                            />
                            
                            <motion.div
                                variants={textAnimation2}
                                initial="hidden"
                                whileInView="visible"
                                animate={inView ? "visible" : "hidden"}
                                // viewport={{ once: true, amount: 0.8 }} 
                            >
                                <VStack align="start" style={{alignItems:'flex-start'}}>
                                    <HStack>
                                        <p className="role" size='md'>Software Developer Intern</p>
                                        <p className="company">@ Home Team (HTX)</p>
                                    </HStack>
                                    <p className="date text-[15px] mb-2">May 2023 - Aug 2023</p>

                                    <p style={{ fontFamily: 'Colfax, sans-serif' }} className="job-description text-[15px]">
                                        Improved web scraping system using Python (Selenium, BeautifulSoup), ensuring
                                        reliable and consistent data extraction from social media platforms like Instagram,
                                        Facebook, TikTok, and Twitter.
                                    </p>
                                    <p style={{ fontFamily: 'Colfax, sans-serif' }} className="job-description text-[15px]">
                                        Deployed intuitive navigation features; converted raw data into visually engaging
                                        insights delivered through a Telegram bot for real-time monitoring and analysis.
                                    </p>
                                </VStack>
                            </motion.div>

                            
                        </HStack>

                    </Flex>

                </VStack>

            </div>
        </motion.div>



        </HStack>
    </>
  );
}

export default ExperienceSection;

