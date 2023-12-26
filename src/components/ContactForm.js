"use client";

import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { VStack, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';


function ContactForm() {
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const msgRef = useRef(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => emailjs.init("7CtOGzorGKGSYEIik"), [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_ce9bhnh";
        const templateId = "template_3fysvf3";
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, {
           name: nameRef.current.value,
            recipient: emailRef.current.value,
            message: msgRef.current.value,
          });
          alert("Email successfully sent check inbox");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
    };

    return (
    <section>
        <form className="for" onSubmit={handleSubmit}>
        <VStack>
            <code className='form-header'> Get in touch! </code>
        </VStack>
        <div className='contact-form'>
            <VStack align={'start'}>
                <code className='form-text'>Your Name</code>
                <input ref={nameRef} className='form-container1' type="text" name="user_name" />
                <code className='form-text'>Your Email</code>
                <input ref={emailRef} className='form-container1' type="email" name="user_email" />
                <code className='form-text'>Your Message</code>
                <textarea ref={msgRef} className='form-container2' name="message" />
                <HStack>
                    <div className='form-send-btn'>
                        <input className='form-send-text' type="submit" value="Send" />
                    </div>
                    <div className="icons-container">
                        <a href="https://www.linkedin.com/in/lawgeokling/">
                            <FontAwesomeIcon className="icons1" icon={faLinkedinIn} />
                        </a>
                        <a href="https://github.com/geoklinglaw">
                            <FontAwesomeIcon className="icons1" icon={faGithub} />
                        </a>
                        <a href="t.me/@uhhhhhhhhhhidk">
                            <FontAwesomeIcon className="icons1" icon={faTelegram} />
                        </a>
                    </div>
                </HStack>
            </VStack>
        </div>
    </form>
    </section>
  );
};

export default ContactForm;