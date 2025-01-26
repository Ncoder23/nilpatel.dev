
import { React, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import ChatInterface from './ChatInterface';

const Hero = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };
    // Disable scrolling when chat is open
    useEffect(() => {
        if (isChatOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Clean up on unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isChatOpen]);
    return (

        !isChatOpen ? (
            <section className="flex items-center justify-center h-screen text-white">
                <div className="text-start max-w-3xl mx-auto px-4">
                    <h1 className="text-6xl font-bold mb-4 leading-snug">hi.<br />i'm nilKumar.</h1>
                    <p className="text-xl max-w-lg mx-auto mb-8">
                        I'm a passionate software engineer pursuing my Master’s degree at Santa Clara University. <br />I specialize in creating impactful digital solutions at the intersection of technology and design.
                    </p>
                    <button onClick={toggleChat} className="px-6 py-3 text-lg border-2 border-white rounded-lg hover:bg-white hover:text-black transition">
                        Chat with me
                    </button>

                </div>
            </section >
        ) : (
            <section className="grid grid-cols-4">
                <div className="col-span-1 bg-black bg-opacity-50">

                </div>

                <ChatInterface onClose={toggleChat} />
                <div>

                </div>
            </section>
        )


    );
};

export default Hero;