"use client";

import { Flex, Box, Text, VStack, Heading, HStack, Icon } from '@chakra-ui/react';
import React, { Component, useRef, useState, useEffect } from "react";
import { Provider, LeftButton, RightButton } from "chakra-ui-carousel";
import Carousel from './Carousel.js';
import { motion, useScroll, useTransform, useSpring, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import Image from 'next/image';


function ProjectCard() {

    const slides1 = [
        "/images/growthhub/landing.png",
        // "images/growthhub/userprofile.png",
        "/images/growthhub/events.png",
        "/images/growthhub/feed.png",
        "/images/growthhub/post.png",
    ]
    

    const slides2 = [
        "/images/trippinout/landing.png",
        "/images/trippinout/preferences.png",
        "/images/trippinout/locations.png",
        "/images/trippinout/dining.png",
        "/images/trippinout/itinerary.png",
    ]

    const slides3 = [
        "/images/budgetbot/:past.png",
    ]


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
        hidden: { opacity: 0, y: 20 }
    };

    return (
        <>
        <HStack>
            <div className="projectCard-layout" >
                <VStack>
                    <HStack>
                    <motion.div
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={variants}
                        transition={{ delay: 0.1, duration: 0.4, ease: "linear"}}
                    >
                        <Box className='projectCard-container'>
                            <VStack>
                                <div className='project-img img'>
                                <Carousel>
                                    {slides1.map((slide) => (
                                        <Image
                                            key={slide}
                                            src={slide}
                                            alt="landingpage"
                                            width={500} // Replace with the actual width of your image
                                            height={300} // Replace with the actual height of your image
                                            layout="responsive"
                                    />
                                    ))}
                                </Carousel>
                                </div>
                                <HStack>
                                    <Flex>
                                        <p className='project-header'> Mental Wellness Social Platform </p>
                                        <IconButton
                                            colorScheme='#FFFFFF'
                                            aria-label='Done'
                                            fontSize='20px'
                                            icon={<ExternalLinkIcon />}
                                        />
                                    </Flex>
                                </HStack>
                                
                                <p className='project-desc'> In collaboration with GrowthCollectiveSG, GrowthHub serves as a social platform designed to nurture mental wellness through events, community engagement, and supportive social groups. </p>
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
                        <Box className='projectCard-container'>
                            <VStack>
                                <Carousel>
                                    {slides2.map((slide) => (
                                        <Image
                                            key={slide}
                                            src={slide}
                                            alt="landingpage"
                                            width={500} // Replace with the actual width of your image
                                            height={300} // Replace with the actual height of your image
                                            layout="responsive"
                                        />
                                    ))}
                                </Carousel>
                                <Flex>
                                    <p className='project-header'> Travel Itinerary Generator </p>
                                    <IconButton
                                        colorScheme='#FFFFFF'
                                        aria-label='Done'
                                        fontSize='20px'
                                        icon={<ExternalLinkIcon />}
                                    />
                                </Flex>
                                <p className='project-desc'> This project offers a tailored travel planning experience, creating customized itineraries based on users' preferences with destinations and dining selections. </p>
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
                        transition={{ delay: 0.25, duration: 0.4, ease: "linear"}}
                    >
                        <Box className='projectCard-container'>
                            <VStack>
                                <Carousel>
                                    {slides3.map((slide) => (
                                        <Image
                                            key={slide}
                                            src={slide}
                                            alt="landingpage"
                                            width={500} // Replace with the actual width of your image
                                            height={300} // Replace with the actual height of your image
                                            layout="responsive"
                                    />
                                    ))}
                                </Carousel>
                                <Flex>
                                    <p className='project-header'> Expenditure Tracker Telegram Bot </p>
                                    <IconButton
                                        colorScheme='#FFFFFF'
                                        aria-label='Done'
                                        fontSize='20px'
                                        icon={<ExternalLinkIcon />}
                                    />
                                </Flex>
                                <p className='project-desc'> User-friendly Telegram bot designed to simplify expense tracking with Google Sheets. It efficiently categorizes expenses, manages one-time and recurring transactions, and allows for easy modification of past entries. </p>
                            </VStack>
                        </Box>
                    </motion.div>
                        <Box style={{opacity:'0%'}} className='projectCard-container'>
                        </Box>
                    </HStack>
                </VStack>
            </div>
        </HStack>
        </>
    );

}

export default ProjectCard;